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
	authTokenValue := strings.Split(authTokenHeader, " ")[1]

	token, err := jwt.Parse(authTokenValue, func(token *jwt.Token) (interface{}, error) {
		return []byte(api.config.TokenSecret), nil
	})

	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	claims, ok := token.Claims.(jwt.MapClaims)

	if !ok || !token.Valid {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "unauthorized"})
		return
	}

	userService := users.NewUserService(api.db)
	user, err := userService.GetUserByID(claims["userID"])

	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	c.Set("currentUser", user)

	c.Next()
}
