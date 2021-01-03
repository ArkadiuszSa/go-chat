package auth

import (
	"net/http"

	authDto "github.com/ArkadiuszSa/go-chat/modules/auth/dto"
	user "github.com/ArkadiuszSa/go-chat/modules/user/dto"
	userService "github.com/ArkadiuszSa/go-chat/modules/user/services"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
)

type LoginService interface {
	LoginUser(email string, password string) bool
}
type credentials struct {
	email    string
	password string
}

// func StaticLoginService() LoginService {
// 	return &loginInformation{
// 		email:    "admin@wesionary.team",
// 		password: "admin",
// 	}
// }
// func (info *loginInformation) LoginUser(email string, password string) bool {
// 	return info.email == email && info.password == password
// }

func ObtainToken(c *gin.Context)  {
	var credentials authDto.CredentialsDto
	c.BindJSON(&credentials)

	userData := userService.GetSingleUserByEmail(credentials.Email)

	if userData.Email=="" {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  http.StatusBadRequest,
			"message": "Invalid login or password",
		})
		return;
	}

	err := bcrypt.CompareHashAndPassword(userData.Password,credentials.Password)

	if(err!=nil){
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  http.StatusBadRequest,
			"message": "Invalid login or password",
		})
		return ;
	}

	token:= GenerateToken(userData.Email, userData.ID)

	c.JSON(http.StatusBadRequest, gin.H{
		"status":  http.StatusOK,
		"message": "Successfully obtained token",
		"body": token,
	})
	return

}

func RegisterUser(c *gin.Context) {

	var registerUser user.RegisterUserDto
	c.BindJSON(&registerUser)

	userData := userService.GetSingleUserByEmail(registerUser.Email)

	if userData.Email!="" {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  http.StatusBadRequest,
			"message": "Account with provided email already exists",
		})
		return
	}

	var newUser=userService.CreateUser(registerUser)

	c.JSON(http.StatusCreated, gin.H{
		"status":  http.StatusCreated,
		"message": "User created Successfully",
		"body":  newUser,
	})

}

