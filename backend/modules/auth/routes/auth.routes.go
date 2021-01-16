package auth

import (
	auth "github.com/ArkadiuszSa/go-chat/modules/auth/controllers"
	"github.com/gin-gonic/gin"
)

//Routes - return user routes
func Routes(router *gin.Engine) {
	router.POST("/register/", auth.RegisterUser)
	router.POST("/obtain-token/", auth.ObtainToken)
}
