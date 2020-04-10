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
		c.JSON(http.StatusBadRequest, gin.H{
			"error": "error",
		})
	} else {
		c.JSON(http.StatusOK, &users)
	}
}
