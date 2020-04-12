package utils

import (
	"fmt"

	"golang.org/x/crypto/bcrypt"
)

//EncryptPassword crypt user password
func EncryptPassword(passwordToCrypt string) (string, error) {
	encryptedPassword, err := bcrypt.GenerateFromPassword([]byte(passwordToCrypt), 15)

	if err != nil {
		return "", err
	}

	return string(encryptedPassword), nil
}

//ValidatePassword validate user password
func ValidatePassword(passwordHash string, password string) bool {
	err := bcrypt.CompareHashAndPassword([]byte(passwordHash), []byte(password))

	if err != nil {
		fmt.Println(err)
		return false
	}

	return true
}
