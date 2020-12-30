package user

import (
	"github.com/ArkadiuszSa/go-chat/modules/user/models"
	userDto "github.com/ArkadiuszSa/go-chat/modules/user/dto"

	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-pg/pg/v9"
	guuid "github.com/google/uuid"
)

// INITIALIZE DB CONNECTION (TO AVOID TOO MANY CONNECTION)
var dbConnect *pg.DB

func InitiateDB(db *pg.DB) {
	dbConnect = db
}

func GetAllUsers(c *gin.Context) {
	var users []user.User
	err := dbConnect.Model(&users).Select()

	if err != nil {
		log.Printf("Error while getting all users, Reason: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  http.StatusInternalServerError,
			"message": "Something went wrong",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "All Users",
		"data":    users,
	})
	return
}

//CreateUser -  create new user in db
func CreateUser(newUser userDto.RegisterUserDto )*user.User {
	var newUserData = &user.User{
		ID:    guuid.New().String(),
		Name:  newUser.Name,
		Email: newUser.Email,
	}

	log.Print(newUserData)

	dbConnect.Insert(newUserData)

	return newUserData
}

//GetSingleUser -  find user by id
func GetSingleUser(c *gin.Context) {
	userID := c.Param("userID")

	user := &user.User{ID: userID}
	err := dbConnect.Select(user)

	if err != nil {
		log.Printf("Error while getting a single user, Reason: %v\n", err)
		c.JSON(http.StatusNotFound, gin.H{
			"status":  http.StatusNotFound,
			"message": "User not found",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "Single User",
		"data":    user,
	})
	return
}

// GetSingleUserByEmail - will find user by email and return user data
func GetSingleUserByEmail(email string) *user.User {
	userData := new(user.User)
	dbConnect.Model(userData).Where("email = ?", email).Select()

	return userData
}

// //EditUser - edit user with provided id
// func EditUser(c *gin.Context) {
// 	userID := c.Param("userID")
// 	var user user.Model
// 	c.BindJSON(&user)

// 	_, err := dbConnect.Model(&user.Model{}).Set("completed = ?", completed).Where("id = ?", userId).Update()
// 	if err != nil {
// 		log.Printf("Error, Reason: %v\n", err)
// 		c.JSON(http.StatusInternalServerError, gin.H{
// 			"status":  500,
// 			"message": "Something went wrong",
// 		})
// 		return
// 	}

// 	c.JSON(http.StatusOK, gin.H{
// 		"status":  200,
// 		"message": "User Edited Successfully",
// 	})
// 	return
// }

//DeleteUser - delete user by id
func DeleteUser(c *gin.Context) {
	userID := c.Param("userID")
	user := &user.User{ID: userID}

	err := dbConnect.Delete(user)
	if err != nil {
		log.Printf("Error while deleting a single user, Reason: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  http.StatusInternalServerError,
			"message": "Something went wrong",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  http.StatusOK,
		"message": "User deleted successfully",
	})
	return
}
