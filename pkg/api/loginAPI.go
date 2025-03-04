package api

import (
	"net/http"

	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"github.com/lavriv92/distance_ed_backend/pkg/users"
	"github.com/lavriv92/distance_ed_backend/pkg/utils"
)

type loginPayload struct {
	Email    string `form:"email" json:"email" bindig:"required"`
	Password string `form:"password" json:"password" binding:"required"`
}

func (api *API) loginAPI(c *gin.Context) {
	var loginJSON *loginPayload

	if err := c.ShouldBindJSON(&loginJSON); err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	user, err := users.NewUserService(api.db).GetUserByEmail(loginJSON.Email)

	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}

	if !utils.ValidatePassword(user.PasswordHash, loginJSON.Password) {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"message": "User not authorized"})
		return
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS512, jwt.MapClaims{
		"userID": user.ID,
	})

	stringToken, err := token.SignedString([]byte(api.config.TokenSecret))

	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": stringToken, "user": user})
}
