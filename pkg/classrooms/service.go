package classrooms

import "github.com/jinzhu/gorm"

//IClassroomService - represents classrooms
type IClassroomService interface{}

//ClassroomService -  implementataion of classrooms service
type ClassroomService struct {
	classroomsRepository IClassroomsRepository
}

//NewClassroomService - creates new classroom service
func NewClassroomService(db *gorm.DB) *ClassroomService {
	classroomsRepository := NewClassroomsRepository(db)

	return &ClassroomService{classroomRepository}
}
