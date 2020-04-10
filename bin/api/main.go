package main

import (
	"github.com/lavriv92/distance_ed_backend/pkg/api"
)

func main() {
	api := api.New()

	api.Run()
}
