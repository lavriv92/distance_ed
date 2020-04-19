package classrooms

import "github.com/jinzhu/gorm"

//IClassroomService - represents classrooms
type IClassroomService interface {
	GetAllClassrooms(userID uint) ([]*Classroom, error)
	Persist(*Classroom) (*Classroom, error)
	GetClassroomDetails(classroomID uint) (*Classroom, error)
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

//GetUserClassrooms provide list of all classrooms
func (s *ClassroomService) GetUserClassrooms(userID uint) ([]*Classroom, error) {
	classrooms, err := s.classroomsRepository.GetByUserID(userID)

	if err != nil {
		return nil, err
	}

	return classrooms, nil
}

//GetClassroomDetails get classroom details
func (s *ClassroomService) GetClassroomDetails(classroomID string) (*Classroom, error) {
	classroom, err := s.classroomsRepository.GetByID(classroomID)

	if err != nil {
		return nil, err
	}

	return classroom, nil
}

//Persist - save classroom to database
func (s *ClassroomService) Persist(classroom *Classroom) (*Classroom, error) {
	createdClassroom, err := s.classroomsRepository.Create(classroom)

	if err != nil {
		return nil, err
	}

	return createdClassroom, nil
}
