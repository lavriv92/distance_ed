package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func (api *API) classRoomsAPI(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{"classrooms": "classrooms"})
}
