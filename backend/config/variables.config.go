package config

import (
	"os"
)

//SecretKey - used to hash user password
var SecretKey string = os.Getenv("SECRET_KEY")
