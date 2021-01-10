import { jwtTokens } from 'config/variablesConfig';
import { JwtTokens } from 'typings';
import { HttpError, HttpMethod, HttpResponse } from 'typings/Http';

import { CookieService } from './cookieService';

interface RequestParams {
    method: HttpMethod;
    path: string;
    body?: unknown;
    isFormData?: boolean;
    hasFullUrl?: boolean;
}

export class HttpService {
    baseUrl: string;
    cookieService: CookieService;

    constructor(baseUrl: string, cookieService: CookieService) {
        this.baseUrl = baseUrl;
        this.cookieService = cookieService;
    }

    GET<T>(path: string, hasFullUrl?: boolean): Promise<T> {
        return this.makeRequest<T>({ method: HttpMethod.GET, path, hasFullUrl });
    }

    POST<T>(path: string, body?: unknown, isFormData?: boolean): Promise<T> {
        return this.makeRequest<T>({
            method: HttpMethod.POST,
            path,
            body,
            isFormData,
        });
    }

    PATCH<T>(path: string, body: unknown): Promise<T> {
        return this.makeRequest<T>({ method: HttpMethod.PATCH, path, body });
    }

    PUT<T>(path: string, body: unknown): Promise<T> {
        return this.makeRequest<T>({ method: HttpMethod.PUT, path, body });
    }

    DELETE<T>(path: string, body?: unknown): Promise<T> {
        return this.makeRequest<T>({ method: HttpMethod.DELETE, path, body });
    }

    makeRequest<T>({ method, path, body }: RequestParams): Promise<T> {
        const token = this.cookieService.getItem<JwtTokens>(jwtTokens);

        const params = {
            method,
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${token?.accessToken}`,
            },
        };

        const url = `${this.baseUrl}${path}/`;

        return fetch(url, params).then<T>(async response => {
            if (response.ok) {
                // return response.status !== 204 ? response.json() : response;
                const fullResponse: HttpResponse<T> = await response.json();
                return fullResponse.body;
            }

            const message = response.statusText;
            const body = await response.json();
            const code = response.status;

            throw new HttpError(message, body, code);
        });
    }
}
