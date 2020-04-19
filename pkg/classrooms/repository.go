package classrooms

import (
	"github.com/jinzhu/gorm"
)

//IClassroomsRepository represents iclassroom
type IClassroomsRepository interface {
	GetByUserID(userID uint) ([]*Classroom, error)
	Create(classroom *Classroom) (*Classroom, error)
	GetByID(id string) (*Classroom, error)
}

//Repository implementation of classrooms repo
type Repository struct {
	db *gorm.DB
}

//NewClassroomsRepository creates new classrooms repo
func NewClassroomsRepository(db *gorm.DB) *Repository {
	return &Repository{db}
}

//GetByUserID get all of classRooms
func (r *Repository) GetByUserID(userID uint) ([]*Classroom, error) {
	var classrooms []*Classroom

	if result := r.db.Where("user_id = ?", userID).Find(&classrooms); result.Error != nil {
		return nil, result.Error
	}

	return classrooms, nil
}

//GetByID get classroom by Id
func (r *Repository) GetByID(id string) (*Classroom, error) {
	var classroom Classroom
	if result := r.db.Preload("Students").Where("id = ?", id).First(&classroom); result.Error != nil {
		return nil, result.Error
	}

	return &classroom, nil
}

//Create create new classroom
func (r *Repository) Create(classroom *Classroom) (*Classroom, error) {
	if result := r.db.Create(classroom); result.Error != nil {
		return nil, result.Error
	}

	return classroom, nil
}
