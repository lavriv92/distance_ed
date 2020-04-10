package api

func (api *API) setupRoutes() {
	api.router.HandleFunc("/", api.healthAPI)
}