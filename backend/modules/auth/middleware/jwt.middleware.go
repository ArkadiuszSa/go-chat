package auth

import (
	"fmt"
	service "github.com/ArkadiuszSa/go-chat/modules/auth/services"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"net/http"
)

func AuthorizeJWT() gin.HandlerFunc {

	return func(c *gin.Context) {
		const BEARER_SCHEMA = "Bearer"
		authHeader := c.GetHeader("Authorization")

		if authHeader == "" {
			c.AbortWithStatus(http.StatusUnauthorized)
		} else {

			tokenString := authHeader[len(BEARER_SCHEMA):]

			token, err := service.JWTAuthService().ValidateToken(tokenString)
			if token.Valid {
				claims := token.Claims.(jwt.MapClaims)
				fmt.Println(claims)
			} else {
				fmt.Println(err)
				c.AbortWithStatus(http.StatusUnauthorized)
			}
		}

	}
}
