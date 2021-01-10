import Cookies from 'js-cookie';

export class CookieService {
    getItem<T>(fieldName: string): T | null {
        const cookieItem = Cookies.get(fieldName);

        return cookieItem ? JSON.parse(cookieItem) : null;
    }

    setItem(fieldName: string, data: string | object, expires = 1): void {
        Cookies.set(fieldName, data, { expires });
    }

    removeItem(fieldName: string): void {
        Cookies.remove(fieldName);
    }
}
