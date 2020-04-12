package config

import "os"

//Config provides application config
type Config struct {
	Port        string
	DatabaseURI string
	TokenSecret string
}

//New provides constructor for config
func New() *Config {
	return &Config{
		Port:        os.Getenv("PORT"),
		DatabaseURI: os.Getenv("DATABASE_URI"),
		TokenSecret: os.Getenv("TOKEN_SECRET"),
	}
}
