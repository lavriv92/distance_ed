package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/lavriv92/distance_ed_backend/pkg/classrooms"
	"github.com/lavriv92/distance_ed_backend/pkg/users"
)

func (api *API) classRoomsAPI(c *gin.Context) {
	currentUser := c.MustGet("currentUser").(*users.User)
	classrooms, err := classrooms.NewClassroomService(api.db).GetUserClassrooms(currentUser.ID)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"err": err.Error()})
		c.Abort()
	}

	c.JSON(http.StatusOK, gin.H{"classrooms": classrooms})
}
