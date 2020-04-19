package materials

import "github.com/jinzhu/gorm"

//IMaterialsService - represent material service
type IMaterialsService interface {
	GetAllMaterials() ([]*Material, error)
}

//Service implementation of service
type Service struct {
	repository IMaterialsRepository
}

//NewMaterialService - create new materials service
func NewMaterialService(db *gorm.DB) *Service {
	repository := NewRepository(db)

	return &Service{repository}
}

//GetAllMaterials get all materials
func (s *Service) GetAllMaterials() ([]*Material, error) {
	materials, err := s.repository.All()

	if err != nil {
		return nil, err
	}

	return materials, nil
}
