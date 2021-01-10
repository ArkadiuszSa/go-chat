import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from 'common/components/PrivateRoute';

import { RootErrorBoundary } from 'core/RootErrorBoundary';
import { history } from 'core/history';
import { privateRoutes, publicRoutes } from 'core/rootRoutes';

const App: React.FC = () => (
    <RootErrorBoundary>
        <Suspense fallback={<div>Loading</div>}>
            <Router history={history}>
                <Switch>
                    {publicRoutes.map(({ path, component: Component }) => (
                        <Route exact path={path} key={path}>
                            <Component />
                        </Route>
                    ))}
                    {privateRoutes.map(route => (
                        <PrivateRoute
                            key={route.path}
                            exact
                            isLoggedIn={false}
                            isPosting={false}
                            path={route.path}
                            component={route.component}
                        />
                    ))}
                </Switch>
            </Router>
        </Suspense>
    </RootErrorBoundary>
);

export default App;
