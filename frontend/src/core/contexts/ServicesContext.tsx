import React, { createContext } from 'react';
import { API_BASE_URL } from 'config/apiConfig';
import { HttpService } from 'core/services/httpService';
import { CookieService } from 'core/services/cookieService';
import { AuthService } from 'core/services/authService';

export const cookieService = new CookieService();
export const httpService = new HttpService(API_BASE_URL, cookieService);
export const authService = new AuthService(httpService, cookieService);

interface ContextState {
    cookieService: CookieService;
    httpService: HttpService;
    authService: AuthService;
}

export const ServicesContext = createContext<ContextState>({
    cookieService,
    httpService,
    authService,
});

export const ServicesContextProvider: React.FC = ({ children }) => {
    return (
        <ServicesContext.Provider value={{ cookieService, httpService, authService }}>
            {children}
        </ServicesContext.Provider>
    );
};
