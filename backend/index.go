package main

import (
	"github.com/ArkadiuszSa/go-chat/config"
	// controller "github.com/ArkadiuszSa/go-chat/modules/auth/controllers"
	// service "github.com/ArkadiuszSa/go-chat/modules/auth/services"
	authControllers "github.com/ArkadiuszSa/go-chat/modules/auth/controllers"
	userControllers "github.com/ArkadiuszSa/go-chat/modules/user/controllers"

	"github.com/gin-gonic/gin"
	"log"
	// "net/http"
)

func main() {
	// Connect DB
	config.Connect()

	// Init Router
	router := gin.Default()

	// Route Handlers / Endpoints
	userControllers.Routes(router)
	authControllers.Routes(router)

	// var loginService service.LoginService = service.StaticLoginService()
	// var jwtService service.JWTService = service.JWTAuthService()
	// var loginController controller.LoginController = controller.LoginHandler(loginService, jwtService)

	// router.POST("/login", func(ctx *gin.Context) {
	// 	token := loginController.Login(ctx)
	// 	if token != "" {
	// 		ctx.JSON(http.StatusOK, gin.H{
	// 			"token": token,
	// 		})
	// 	} else {
	// 		ctx.JSON(http.StatusUnauthorized, nil)
	// 	}
	// })

	log.Fatal(router.Run(":4000"))

}
