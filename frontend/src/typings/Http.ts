export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    PATCH = 'PATCH',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export type HttpHeaders = Record<string, string>;

export class HttpErrorBase<T> extends Error {
    constructor(message: string, public body: T, public code: number) {
        super(message);

        Error.captureStackTrace(this, HttpErrorBase);
    }
}

type DefaultErrorBody = Record<string, string>;

export class HttpError extends HttpErrorBase<DefaultErrorBody> {}

export interface HttpResponse<T> {
    body: T;
    message: string;
    status: number;
}
