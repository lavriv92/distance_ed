package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type payload struct {
	Message string `json:"message"`
}

func (api *API) healthAPI(c *gin.Context) {
	m := &payload{
		Message: "DistanceED rest api",
	}

	c.JSON(http.StatusOK, m)
}
