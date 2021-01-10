package auth

//TokensDto - data required for obtain token
type TokensDto struct {
	AccessToken    string `json:"accessToken"`
	RefreshToken string `json:"refreshToken"`
}
