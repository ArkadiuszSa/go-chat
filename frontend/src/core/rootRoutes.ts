import { routes } from 'config/routesConfig';

import Chat from 'pages/Chat';
import RegisterPanel from 'pages/RegisterPanel';
import LoginPanel from 'pages/LoginPanel';

export const publicRoutes = [
    { component: RegisterPanel, path: routes.register },
    { component: LoginPanel, path: routes.logIn },
    { component: RegisterPanel, path: routes.register },
];

export const privateRoutes = [{ component: Chat, path: routes.chat }];
