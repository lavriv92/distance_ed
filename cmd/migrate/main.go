package main

import (
	"github.com/jinzhu/gorm"
	"github.com/joho/godotenv"
	"github.com/lavriv92/distance_ed_backend/pkg/classrooms"
	"github.com/lavriv92/distance_ed_backend/pkg/di"
	"github.com/lavriv92/distance_ed_backend/pkg/materials"
	"github.com/lavriv92/distance_ed_backend/pkg/users"
)

func init() {
	godotenv.Load()
}

func main() {
	container := di.BuildContainer()

	container.Invoke(func(db *gorm.DB) {
		db.AutoMigrate(&users.User{}, &classrooms.Classroom{}, &materials.Material{})
	})
}
