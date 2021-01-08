package user

import (
	"net/http"

	user "github.com/ArkadiuszSa/go-chat/modules/user/services"
	"github.com/gin-gonic/gin"
)

//Routes - return user routes
func Routes(router *gin.Engine) {
	router.GET("/users", user.GetAllUsers)
	router.GET("/user/:userID", user.GetSingleUser)
	router.DELETE("/user/:userID", user.DeleteUser)
	router.NoRoute(notFound)
}

func notFound(c *gin.Context) {
	c.JSON(http.StatusNotFound, gin.H{
		"status":  404,
		"message": "Route Not Found",
	})
	return
}
