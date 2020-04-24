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
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"message": "Token should be provided"})
		return
	}

	token, err := jwt.Parse(tokenData[1], func(token *jwt.Token) (interface{}, error) {
		return []byte(api.config.TokenSecret), nil
	})

	if err != nil {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	claims, ok := token.Claims.(jwt.MapClaims)

	if !ok || !token.Valid {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "unauthorized"})
	}

	userService := users.NewUserService(api.db)
	user, err := userService.GetUserByID(claims["userID"])

	if err != nil {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "Unauthorized"})
		return
	}

	c.Set("currentUser", user)

	c.Next()
}
