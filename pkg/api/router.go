package api

func (api *API) setupRoutes() {

	v1 := api.router.Group("/v1")
	{
		v1.GET("/", api.healthAPI)

		v1.GET("/users", api.getUsersAPI)
	}
}
