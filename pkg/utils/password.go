package utils

import (
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
