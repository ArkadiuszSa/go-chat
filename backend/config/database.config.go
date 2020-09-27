package config

import (
	userModels "github.com/ArkadiuszSa/go-chat/modules/user/models"
	userServices "github.com/ArkadiuszSa/go-chat/modules/user/services"

	"github.com/go-pg/pg/v9"
	"log"
	"os"
)

//Connect Connecting to db
func Connect() *pg.DB {
	opts := &pg.Options{
		Addr:     "172.25.0.1:5432",
		User:     "root",
		Password: "root",
		Database: "go-chat",
	}

	var db *pg.DB = pg.Connect(opts)
	if db == nil {
		log.Printf("Failed to connect")
		os.Exit(100)
	}
	log.Printf("Connected to db")

	userModels.CreateUserTable(db)
	userServices.InitiateDB(db)
	return db
}
