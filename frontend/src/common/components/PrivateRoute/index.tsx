import React, { useContext } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { UserContext } from 'core/contexts/UserContext';

interface Props extends RouteProps {
    component: React.FC;
}

export const PrivateRoute: React.FC<Props> = ({ component: Component, ...rest }) => {
    const {
        state: { isLoggingIn, isLoggedIn },
    } = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={() =>
                isLoggingIn ? null : isLoggedIn ? <Component /> : <Redirect to="/log-in" />
            }
        />
    );
};
