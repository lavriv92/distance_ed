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
	UserID      uint
	User        users.User    `gorm:"foreignkey:UserID" json:"-"`
	Students    []*users.User `gorm:"many2many:user_classrooms;"`
}
