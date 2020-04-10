package users

import "github.com/jinzhu/gorm"

//IUserService userService declaration
type IUserService interface {
	GetUserByEmail(email string) (*User, error)
	GetAllUsers() ([]*User, error)
}

//UserService  userServise implementation
type UserService struct {
	db *gorm.DB
}

//NewUserService create new user service
func NewUserService(db *gorm.DB) *UserService {
	return &UserService{db}
}

//GetAllUsers provide all users
func (s *UserService) GetAllUsers() ([]*User, error) {
	var users []*User
	res := s.db.Find(&users)

	if res.Error != nil {
		return nil, res.Error
	}

	return users, nil
}

//GetUserByEmail get user by email
func (s *UserService) GetUserByEmail(email string) (*User, error) {
	var user *User
	if res := s.db.Where("email = ?", email).First(&user); res.Error != nil {
		return nil, res.Error
	}

	return user, nil
}
