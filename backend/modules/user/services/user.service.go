package user

import (
	"fmt"
	"github.com/ArkadiuszSa/go-chat/modules/user/models"
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

	fmt.Println("dzialam")

	var users []user.Model
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
func CreateUser(c *gin.Context) {
	var newUser user.Model
	c.BindJSON(&newUser)
	name := newUser.Name
	email := newUser.Email
	id := guuid.New().String()

	insertError := dbConnect.Insert(&user.Model{
		ID:    id,
		Name:  name,
		Email: email,
	})
	if insertError != nil {
		log.Printf("Error while inserting new user into db, Reason: %v\n", insertError)
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  http.StatusInternalServerError,
			"message": "Something went wrong",
		})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"status":  http.StatusCreated,
		"message": "User created Successfully",
	})
	return
}

//GetSingleUser -  find user by id
func GetSingleUser(c *gin.Context) {
	userID := c.Param("userId")
	user := &user.Model{ID: userID}
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
	user := &user.Model{ID: userID}

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
