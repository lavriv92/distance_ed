package api

import (
	"github.com/gorilla/mux"
)

//API application api
type API struct {
	Server *mux.Router
}

//New constructs new api instance
func New() *API {
	return &API{
		Server: mux.NewRouter(),
	}
}
