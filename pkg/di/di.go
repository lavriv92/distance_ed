package di

import (
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"

	"github.com/lavriv92/distance_ed_backend/pkg/api"
	"github.com/lavriv92/distance_ed_backend/pkg/config"
	"go.uber.org/dig"
)

func provideConfig() *config.Config {
	return config.New()
}

func provideDatabase(config *config.Config) (*gorm.DB, error) {
	db, err := gorm.Open("postgres", config.DatabaseURI)

	if err != nil {
		return nil, err
	}

	return db, nil
}

func provideAPI(config *config.Config, db *gorm.DB) *api.API {
	return api.New(config, db)
}

//BuildContainer build di for application
func BuildContainer() *dig.Container {
	container := dig.New()
	container.Provide(provideAPI)
	container.Provide(provideDatabase)
	container.Provide(provideConfig)

	return container
}
