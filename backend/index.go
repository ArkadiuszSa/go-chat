package main

import (
	"github.com/ArkadiuszSa/go-chat/config"
	"github.com/ArkadiuszSa/go-chat/modules/user/controllers"
	"github.com/gin-gonic/gin"
	"log"
)

func main() {
	// router := gin.Default()
	// router.GET("/ping", func(context *gin.Context) {
	// 	context.JSON(200, gin.H{
	// 		"message": "pong",
	// 	})
	// })
	// router.Run(":4000")

	// config.Connect()

	// Connect DB
	config.Connect()

	// Init Router
	router := gin.Default()

	// Route Handlers / Endpoints
	user.Routes(router)

	log.Fatal(router.Run(":4000"))

}
