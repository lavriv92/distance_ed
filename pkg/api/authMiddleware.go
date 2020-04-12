package api

import (
	"net/http"
	"strings"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"github.com/lavriv92/distance_ed_backend/pkg/users"
)

func (api *API) authMiddleware(c *gin.Context) {
	authTokenHeader := c.Request.Header.Get("Authorization")

	tokenData := strings.Split(authTokenHeader, " ")

	if len(tokenData) != 2 {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Token should be provided"})
		c.Abort()
	}

	token, err := jwt.Parse(tokenData[1], func(token *jwt.Token) (interface{}, error) {
		return []byte(api.config.TokenSecret), nil
	})

	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		c.Abort()
	}

	claims, ok := token.Claims.(jwt.MapClaims)

	if !ok || !token.Valid {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "unauthorized"})
		c.Abort()
	}

	userService := users.NewUserService(api.db)
	user, err := userService.GetUserByID(claims["userID"])

	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		c.Abort()
	}

	c.Set("currentUser", user)

	c.Next()
}
