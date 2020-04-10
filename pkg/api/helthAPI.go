package api

import (
	"encoding/json"
	"net/http"
)

type payload struct {
	Message string `json:"message"`
}

func (api *API) healthAPI(w http.ResponseWriter, r *http.Request) {
	m := &payload{
		Message: "DistanceED rest api",
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(m)
}
