package main

import (
	"github.com/lavriv92/distance_ed_backend/pkg/api"
	"github.com/lavriv92/distance_ed_backend/pkg/di"
)

func main() {
	api := api.New()
	container := di.BuildContainer()

	err := container.Invoke(func() {
		api.Run()
	})

	if err != nil {
		panic(err)
	}
}
