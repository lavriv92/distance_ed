package main

import (
	"github.com/joho/godotenv"
	"github.com/lavriv92/distance_ed_backend/pkg/api"
	"github.com/lavriv92/distance_ed_backend/pkg/di"
)

func init() {
	godotenv.Load()
}

func main() {
	container := di.BuildContainer()

	err := container.Invoke(func(api *api.API) {
		api.Run()
	})

	if err != nil {
		panic(err)
	}
}
