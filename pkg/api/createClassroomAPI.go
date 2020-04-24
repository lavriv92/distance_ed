package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/lavriv92/distance_ed_backend/pkg/classrooms"
	"github.com/lavriv92/distance_ed_backend/pkg/users"
)

type classroomPayload struct {
	Name        string `form:"name" json:"name" binding:"required"`
	Description string `form:"description" json:"description"`
}

func (api *API) createClassroomAPI(c *gin.Context) {
	var classroomJSON classroomPayload
	err := c.ShouldBindJSON(&classroomJSON)

	if err != nil {
		c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	currentUser := c.MustGet("currentUser").(*users.User)
	createdClassRoom, err := classrooms.NewClassroomService(api.db).Persist(&classrooms.Classroom{
		Name:        classroomJSON.Name,
		Description: classroomJSON.Description,
		UserID:      currentUser.ID,
	})

	if err != nil {
		c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"classroom": createdClassRoom})
}
