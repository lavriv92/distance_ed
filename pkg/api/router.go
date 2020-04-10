package api

func (api *API) setupRoutes() {

	auth := api.router.Group("/auth")
	{
		auth.POST("/token", api.loginAPI)
	}

	v1 := api.router.Group("/v1")
	{
		v1.GET("/", api.healthAPI)

		v1.GET("/users", api.getUsersAPI)
		v1.POST("/users", api.createUserAPI)
	}
}
