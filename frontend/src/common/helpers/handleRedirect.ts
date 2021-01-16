import { history } from 'core/history';

export const handleRedirect = (route: string) => {
    history.push(route);
};
