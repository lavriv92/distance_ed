package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/lavriv92/distance_ed_backend/pkg/classrooms"
)

func (api *API) classRoomsAPI(c *gin.Context) {
	classroomsService := classrooms.NewClassroomService(api.db)
	classrooms, err := classroomsService.GetAllClassrooms()

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"err": err.Error(),
		})
		c.Abort()
	}

	c.JSON(http.StatusOK, gin.H{"classrooms": classrooms})
}

func (api *API) createClassRoomsAPI(c *gin.Context) {

}
