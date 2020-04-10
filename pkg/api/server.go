package api

import (
	"net/http"

	"github.com/gorilla/mux"
)

//API application api
type API struct {
	router *mux.Router
}

//New constructs new api instance
func New() *API {
	return &API{
		router: mux.NewRouter(),
	}
}

//Run start server
func (api *API)Run() {
	api.setupRoutes()
	http.ListenAndServe(":8080", api.router)
}
