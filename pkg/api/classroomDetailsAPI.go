package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/lavriv92/distance_ed_backend/pkg/classrooms"
)

func (api *API) classroomDetailsAPI(c *gin.Context) {
	classroom, err := classrooms.NewClassroomService(api.db).GetClassroomDetails(c.Param("id"))

	if err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": err.Error()})
		c.Abort()
	}

	c.JSON(http.StatusOK, gin.H{"classroom": classroom})
}
