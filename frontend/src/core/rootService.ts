import { API_BASE_URL } from 'config/apiConfig';
import { HttpService } from 'core/services/httpService';
import { CookieService } from 'core/services/cookieService';
import { AuthService } from './services/authService';

export const cookieService = new CookieService();
export const httpService = new HttpService(API_BASE_URL, cookieService);
export const authService = new AuthService(httpService, cookieService);
