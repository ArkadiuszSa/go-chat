import { HttpService } from 'core/services/httpService';
import { CookieService } from 'core/services/cookieService';
import { jwtTokens } from 'config/variablesConfig';
import { apiRoutes } from 'config/apiConfig';

import { Credentials, JwtTokenData, JwtTokens } from 'typings/Auth';
import { User } from 'typings/User';
import jwtDecode from 'jwt-decode';

export class AuthService {
    constructor(
        private readonly httpService: HttpService,
        private readonly cookieService: CookieService,
    ) {}

    async logIn(credentials: Credentials) {
        const tokens = await this.getTokens(credentials);
        this.cookieService.setItem(jwtTokens, tokens);
        console.log(tokens);
        const decodedToken = jwtDecode<JwtTokenData>(tokens.accessToken);
        console.log(decodedToken);
        const userProfile = await this.getUserProfile(decodedToken.id);

        return userProfile;
    }

    getUserProfile(userId: string) {
        return this.httpService.GET<User>(apiRoutes.getUserProfile(userId));
    }

    getTokens(credentials: Credentials) {
        return this.httpService.POST<JwtTokens>(apiRoutes.obtainToken, credentials);
    }
}
