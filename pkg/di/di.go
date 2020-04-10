package di

import "go.uber.org/dig"

func provideConfig() {

}

//BuildContainer build di for application
func BuildContainer() *dig.Container {
	container := dig.New()

	return container
}
