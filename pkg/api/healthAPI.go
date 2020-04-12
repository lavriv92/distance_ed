package api

import (
	"fmt"
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

	fmt.Println(c.Get("currentUser"))

	c.JSON(http.StatusOK, m)
}
