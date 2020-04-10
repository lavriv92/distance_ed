package api

import (
	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	"github.com/lavriv92/distance_ed_backend/pkg/config"
)

//API application api
type API struct {
	router *gin.Engine
	config *config.Config
	db     *gorm.DB
}

//New constructs new api instance
func New(appConfig *config.Config, db *gorm.DB) *API {
	return &API{
		db:     db,
		config: appConfig,
		router: gin.Default(),
	}
}

//Run start server
func (api *API) Run() {
	api.setupRoutes()

	api.router.Run(api.config.Port)
}
