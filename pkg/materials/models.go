package materials

import "github.com/jinzhu/gorm"

//Material represents material
type Material struct {
	gorm.Model
	Name        string
	Description string
	Type        string
}
