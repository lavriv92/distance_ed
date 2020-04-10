package api

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/lavriv92/distance_ed_backend/pkg/users"
)

type loginPayload struct {
	Email    string `"form:"email" json:"email" bindig:"required"`
	Password string `form:"password" json:"password" binding:"required"`
}

func (api *API) loginAPI(c *gin.Context) {
	var loginJSON *loginPayload

	if err := c.ShouldBindJSON(&loginJSON); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	fmt.Println(loginJSON)

	userService := users.NewUserService(api.db)

	user, err := userService.GetUserByEmail(loginJSON.Email)

	if err != nil {
		c.JSON(http.StatusBadGateway, gin.H{"message": err.Error()})
		return
	}

	c.JSON(http.StatusOK, user)
}
