import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
    component: React.FC;
    isLoggedIn: boolean;
    isPosting: boolean;
}

export const PrivateRoute: React.FC<Props> = ({
    component: Component,
    isLoggedIn,
    isPosting,
    ...rest
}) => (
    <Route
        {...rest}
        render={() => (isPosting ? null : isLoggedIn ? <Component /> : <Redirect to="/log-in" />)}
    />
);
