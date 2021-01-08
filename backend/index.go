package main

import (
	"github.com/ArkadiuszSa/go-chat/config"
	authRoutes "github.com/ArkadiuszSa/go-chat/modules/auth/routes"
	userRoutes "github.com/ArkadiuszSa/go-chat/modules/user/routes"

	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	// Connect DB
	config.Connect()

	// Init Router
	router := gin.Default()

	// Route Handlers / Endpoints
	userRoutes.Routes(router)
	authRoutes.Routes(router)

	log.Fatal(router.Run(":4000"))

}
