import React, { createContext, useReducer } from 'react';
import { User } from 'typings';

interface UserState {
    user?: User;
    isLoggedIn: boolean;
    isLoggingIn: boolean;
}

const initialState: UserState = {
    isLoggedIn: false,
    isLoggingIn: false,
};

interface ContextState {
    state: UserState;
    dispatch: (action: Action) => void;
}

type Action =
    | { type: 'SET_USER_DATA'; payload: { user: User } }
    | { type: 'SET_IS_LOGGED_IN'; payload: { isLoggedIn: boolean } };

export const setUserData = (user: User): Action => ({
    type: 'SET_USER_DATA',
    payload: { user },
});

export const setIsLoggedIn = (isLoggedIn: boolean): Action => ({
    type: 'SET_IS_LOGGED_IN',
    payload: { isLoggedIn },
});

function userReducer(state: UserState, action: Action): UserState {
    switch (action.type) {
        case 'SET_USER_DATA':
            return { ...state, user: action.payload.user };
        case 'SET_IS_LOGGED_IN':
            return { ...state, isLoggedIn: action.payload.isLoggedIn };

        default:
            return state;
    }
}

export const UserContext = createContext<ContextState>({
    state: initialState,
    dispatch: () => {
        /* do nothing */
    },
});

export const UserContextProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return <UserContext.Provider value={{ state, dispatch }}>{children}</UserContext.Provider>;
};
