package auth

//Credentials - data required for obtain token
type CredentialsDto struct {
	Email    string `json:"email"`
	Password []byte `json:"password"`
}
