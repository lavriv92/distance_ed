package api

import "github.com/gin-gonic/gin"


//API application api
type API struct {
	router  *gin.Engine
}

//New constructs new api instance
func New() *API {
	return &API{
		router: gin.Default(),
	}
}

//Run start server
func (api *API)Run() {
	api.setupRoutes()
	
	api.router.Run()
}
