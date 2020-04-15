package classrooms

import (
	"github.com/jinzhu/gorm"
	"github.com/lavriv92/distance_ed_backend/pkg/users"
)

//Classroom represents classroom model
type Classroom struct {
	gorm.Model
	Name        string
	Description string
	UserID      int
	User        users.User
}
