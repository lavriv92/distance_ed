package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/lavriv92/distance_ed_backend/pkg/users"
	"github.com/lavriv92/distance_ed_backend/pkg/utils"
)

type userPayload struct {
	Email                string `form:"email" json:"email" binding:"required"`
	Password             string `form:"password" json:"password" binding:"required"`
	PasswordConfirmation string `form:"passwordConfirmation" json:"passwordConfirmation" binding:"required"`
	FirstName            string `form:"firstName" json:"firstName"`
	LastName             string `form:"lastName" json:"lastName"`
}

//TODO: move serveral logic to service
func (api *API) createUserAPI(c *gin.Context) {
	var userJSON userPayload
	if err := c.ShouldBindJSON(&userJSON); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if userJSON.Password != userJSON.PasswordConfirmation {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Password mismatch"})
		return
	}

	user := &users.User{
		Email:     userJSON.Email,
		FirstName: userJSON.FirstName,
		LastName:  userJSON.LastName,
	}

	encryptedPassword, err := utils.EncryptPassword(userJSON.Password)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}

	user.PasswordHash = string(encryptedPassword)

	usersService := users.NewUserService(api.db)
	createdUser, err := usersService.Persist(user)

	if err != nil {
		c.JSON(http.StatusConflict, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, createdUser)
}
