package users

import "github.com/jinzhu/gorm"

//IUserService userService declaration
type IUserService interface {
	GetUserByEmail(email string) (*User, error)
	GetAllUsers() ([]*User, error)
	Persist(user *User) ([]*User, error)
}

//UserService  userServise implementation
type UserService struct {
	db              *gorm.DB
	usersRepository IUsersRepository
}

//NewUserService create new user service
func NewUserService(db *gorm.DB) *UserService {
	usersRepository := &Repository{db}
	return &UserService{
		usersRepository,
	}
}

//GetAllUsers provide all users
func (s *UserService) GetAllUsers() ([]*User, error) {
	users, err := s.usersRepository.All()

	if err != nil {
		return nil, err
	}

	return users, nil
}

//GetUserByEmail get user by email
func (s *UserService) GetUserByEmail(email string) (*User, error) {

	user, err := s.usersRepository.GetByEmail(email)

	if err != nil {
		return nil, err
	}

	return user, nil
}

//Persist Persist user
func (s *UserService) Persist(user *User) (*User, error) {
	user, err := s.usersRepository.Create(user)

	if err != nil {
		return nil, err
	}

	return user, nil
}
