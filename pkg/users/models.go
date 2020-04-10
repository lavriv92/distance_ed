package users

import (
	"github.com/jinzhu/gorm"
)

//User represents user model
type User struct {
	gorm.Model
	Email     string `json:"email" gorm:"type:varchar(100);unique_index"`
	Password  string `gorm:"type:varchar(255)" json:"-"`
	FirstName string `gorm:"type:varchar(255)"`
	LastName  string `gorm:"type:varchar(100)"`
}
