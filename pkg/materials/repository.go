package materials

import "github.com/jinzhu/gorm"

//IMaterialsRepository represents materials repository
type IMaterialsRepository interface {
	All() ([]*Material, error)
}

//Repository implementation
type Repository struct {
	db *gorm.DB
}

//NewRepository create new repository
func NewRepository(db *gorm.DB) *Repository {
	return &Repository{db}
}

//All get all materials
func (r *Repository) All() ([]*Material, error) {
	var materials []*Material
	if result := r.db.Find(&materials); result.Error != nil {
		return nil, result.Error
	}

	return materials, nil
}
