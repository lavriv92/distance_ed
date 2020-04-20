package api

import (
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/lavriv92/distance_ed_backend/pkg/materials"
)

func (api *API) materialsAPI(c *gin.Context) {
	materials, err := materials.NewMaterialService(api.db).GetAllMaterials()

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		c.Abort()
	}

	c.JSON(http.StatusOK, gin.H{"materials": materials})
}
