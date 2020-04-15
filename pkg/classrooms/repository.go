package classrooms

import (
	"github.com/jinzhu/gorm"
)

//IClassroomsRepository represents iclassroom
type IClassroomsRepository interface {
	FindAll() ([]*Classroom, error)
	Create(classroom *Classroom) (*Classroom, error)
}

//Repository implementation of classrooms repo
type Repository struct {
	db *gorm.DB
}

//NewClassroomsRepository creates new classrooms repo
func NewClassroomsRepository(db *gorm.DB) *Repository {
	return &Repository{db}
}

//FindAll get all of classRooms
func (r *Repository) FindAll() ([]*Classroom, error) {
	var classrooms []*Classroom

	if result := r.db.Find(&classrooms); result.Error != nil {
		return nil, result.Error
	}

	return classrooms, nil
}

//Create create new classroom
func (r *Repository) Create(classroom *Classroom) (*Classroom, error) {
	if result := r.db.Create(classroom); result.Error != nil {
		return nil, result.Error
	}

	return classroom, nil
}
