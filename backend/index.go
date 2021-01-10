package main

import (
	"log"
	"time"

	"github.com/ArkadiuszSa/go-chat/config"
	authRoutes "github.com/ArkadiuszSa/go-chat/modules/auth/routes"
	userRoutes "github.com/ArkadiuszSa/go-chat/modules/user/routes"
	"github.com/gin-gonic/gin"
	cors "github.com/itsjamie/gin-cors"
)

func main() {
	// Connect DB
	config.Connect()

	// Init Router
	router := gin.Default()

	router.Use(cors.Middleware(cors.Config{
		Origins:        "*",
		Methods:        "GET, PUT, POST, DELETE, OPTIONS",
		RequestHeaders: "Origin, Authorization, Content-Type",
		ExposedHeaders: "",
		MaxAge: 50 * time.Second,
		Credentials: true,
		ValidateHeaders: false,
	}))


	// Route Handlers / Endpoints
	userRoutes.Routes(router)
	authRoutes.Routes(router)

	log.Fatal(router.Run(":4000"))

}
