package user

import (
	"github.com/go-pg/pg/v9"
	orm "github.com/go-pg/pg/v9/orm"
	"log"
)

//Model - user database model
type Model struct {
	ID    string `json:"id"`
	Name  string `json:"title"`
	Email string `json:"body"`
}

//CreateUserTable - create users table in database
func CreateUserTable(db *pg.DB) error {
	opts := &orm.CreateTableOptions{
		IfNotExists: true,
	}
	createError := db.CreateTable(&Model{}, opts)
	if createError != nil {
		log.Printf("Error while creating users table, Reason: %v\n", createError)
		return createError
	}
	log.Printf("Users table created")
	return nil
}
