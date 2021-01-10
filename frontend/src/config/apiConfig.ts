export const API_BASE_URL = 'http://localhost:4000';

export const apiRoutes = {
    logIn: '/log-in',
    register: '/register',
    obtainToken: '/obtain-token',
    getUserProfile: (profileId: string) => `/user/${profileId}`,
};
