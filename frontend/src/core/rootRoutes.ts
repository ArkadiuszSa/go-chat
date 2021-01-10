import { routes } from 'config/routesConfig';

import Chat from 'pages/Chat';
import LoginPanel from 'pages/LoginPanel';
import RegisterPanel from 'pages/RegisterPanel';

export const publicRoutes = [
    { component: RegisterPanel, path: routes.register },
    { component: LoginPanel, path: routes.logIn },
];

export const privateRoutes = [{ component: Chat, path: routes.chat }];
