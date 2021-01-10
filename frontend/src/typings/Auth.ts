export interface Credentials {
    email: string;
    password: string;
}

export interface RegisterRequest extends Credentials {
    name: string;
}

export interface JwtTokens {
    accessToken: string;
}

export interface JwtTokenData {
    id: string;
    expirationDate: string;
    issueDate: string;
}
