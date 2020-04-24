package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/lavriv92/distance_ed_backend/pkg/users"
)

func (api *API) getUsersAPI(c *gin.Context) {
	usersService := users.NewUserService(api.db)
	users, err := usersService.GetAllUsers()

	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
			"error": "error",
		})
		return
	}

	c.JSON(http.StatusOK, &users)
}
