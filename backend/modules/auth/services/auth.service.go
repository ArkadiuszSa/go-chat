package auth

import (
	dto "github.com/ArkadiuszSa/go-chat/modules/auth/dto"
	userModels "github.com/ArkadiuszSa/go-chat/modules/user/models"
	userService "github.com/ArkadiuszSa/go-chat/modules/user/services"
	"github.com/ArkadiuszSa/go-chat/modules/user/dto"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

type LoginService interface {
	LoginUser(email string, password string) bool
}
type loginInformation struct {
	email    string
	password string
}

func StaticLoginService() LoginService {
	return &loginInformation{
		email:    "admin@wesionary.team",
		password: "admin",
	}
}
func (info *loginInformation) LoginUser(email string, password string) bool {
	return info.email == email && info.password == password
}

func RegisterUser(c *gin.Context) {

	var registerUser user.RegisterUserDto

	c.BindJSON(&registerUser)

	userData := userService.GetSingleUserByEmail(registerUser.Email)

	if (userModels.User{}) != *userData {

		log.Print("wchodze tutej")
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
		"body":    newUser,
	})

}

func ObtainToken(credentials dto.Credentials) {
	// sprawdz czy user istnieje
	// jeli istnieeje to porownaj credentiale i wygeneruj token
}
