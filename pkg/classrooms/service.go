package classrooms

import "github.com/jinzhu/gorm"

//IClassroomService - represents classrooms
type IClassroomService interface {
	GetAllClassrooms() ([]*Classroom, error)
	Persist(*Classroom) (*Classroom, error)
}

//ClassroomService -  implementataion of classrooms service
type ClassroomService struct {
	classroomsRepository IClassroomsRepository
}

//NewClassroomService - creates new classroom service
func NewClassroomService(db *gorm.DB) *ClassroomService {
	classroomsRepository := NewClassroomsRepository(db)

	return &ClassroomService{
		classroomsRepository,
	}
}

//GetAllClassrooms provide list of all classrooms
func (s *ClassroomService) GetAllClassrooms() ([]*Classroom, error) {
	classrooms, err := s.classroomsRepository.FindAll()

	if err != nil {
		return nil, err
	}

	return classrooms, nil
}

//Persist - save classroom to database
func (s *ClassroomService) Persist(classroom *Classroom) (*Classroom, error) {
	createdClassroom, err := s.classroomsRepository.Create(classroom)

	if err != nil {
		return nil, err
	}

	return createdClassroom, nil
}
