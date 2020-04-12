package users

import "github.com/jinzhu/gorm"

//IUsersRepository users repository declaration
type IUsersRepository interface {
	All() ([]*User, error)
	GetByEmail(email string) (*User, error)
	GetByID(id interface{}) (*User, error)
	Create(user *User) (*User, error)
}

//Repository users repository implementation
type Repository struct {
	db *gorm.DB
}

//NewUsersRepository creates new users repository
func NewUsersRepository(db *gorm.DB) *Repository {
	return &Repository{db}
}

//All get all users
func (r *Repository) All() ([]*User, error) {
	var users []*User

	if result := r.db.Find(&users); result.Error != nil {
		return nil, result.Error
	}

	return users, nil
}

//GetByEmail get user by email
func (r *Repository) GetByEmail(email string) (*User, error) {
	var user User

	if result := r.db.First(&user, "email = ?", email); result.Error != nil {
		return nil, result.Error
	}

	return &user, nil
}

//GetByID get user by id
func (r *Repository) GetByID(id interface{}) (*User, error) {
	var user User

	if result := r.db.First(&user, "id = ?", id); result.Error != nil {
		return nil, result.Error
	}

	return &user, nil
}

//Create create new user
func (r *Repository) Create(user *User) (*User, error) {
	if result := r.db.Create(&user); result.Error != nil {
		return nil, result.Error
	}

	return user, nil
}
