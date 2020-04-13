package classrooms

import "github.com/jinzhu/gorm"

//IClassroomsRepository represents iclassroom
type IClassroomsRepository interface {
	FindAll() ([]*Classroom, error)
}

//Repository implementation of classrooms repo
type Repository struct {
	db *gorm.DB
}

//NewClassroomsRepository creates new classrooms repo
func NewClassroomsRepository(db *gorm.DB) *Repository {
	return &ClassroomsRepository{db}
}

//FindAll get all of classRooms
func (r *Repository) FindAll() {
	var classrooms []*Classroom
	if result := r.db.All(&classrooms); result.Error != nil {
		return nil, result.Error
	}

	return classrooms, nil
}
