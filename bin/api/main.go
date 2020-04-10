package main

import (
	"log"
	"net/http"

	"github.com/lavriv92/distance_ed_backend/pkg/api"
)

func main() {
	api := api.New()

	log.Fatal(http.ListenAndServe(":8080", api.Server))

}
