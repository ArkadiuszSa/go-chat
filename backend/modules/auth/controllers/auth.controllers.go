package auth

import (
	"github.com/ArkadiuszSa/go-chat/modules/auth/services"
	"github.com/gin-gonic/gin"
)

//Routes - return user routes
func Routes(router *gin.Engine) {
	router.POST("/register", auth.RegisterUser)
	// router.POST("/obtain-token", auth.GenerateToken)
	// router.POST("/refresh-token", user.CreateUser)
}
