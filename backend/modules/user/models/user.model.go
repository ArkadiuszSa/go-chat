package user

import (
	"github.com/go-pg/pg/v9"
	orm "github.com/go-pg/pg/v9/orm"
	"log"
)

//User - user database model
type User struct {
	ID    string `json:"id"`
	Name  string `json:"name"`
	Email string `json:"email"`
}

//CreateUserTable - create users table in database
func CreateUserTable(db *pg.DB) error {
	opts := &orm.CreateTableOptions{
		IfNotExists: true,
	}
	createError := db.CreateTable(&User{}, opts)
	if createError != nil {
		log.Printf("Error while creating users table, Reason: %v\n", createError)
		return createError
	}
	log.Printf("Users table created")
	return nil
}
