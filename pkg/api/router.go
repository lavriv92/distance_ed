package api

func (api *API) setupRoutes() {

	auth := api.router.Group("/auth")
	{
		//Provide user token
		auth.POST("/token", api.loginAPI)

		//create user
		auth.POST("/users", api.createUserAPI)
	}

	v1 := api.router.Group("/v1")
	{
		v1.Use(api.authMiddleware)

		//healthcheck api
		v1.GET("/", api.healthAPI)

		//classrooms api
		v1.GET("/classrooms", api.classRoomsAPI)
	}
}
