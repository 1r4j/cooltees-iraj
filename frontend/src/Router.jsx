import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './containers/Home';
import SignUp from './containers/Signup';
import LogIn from './containers/Login';
import Cart from './containers/Cart';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/signup'} component={SignUp} />
                <Route exact path={'/login'} component={LogIn} />
                <Route exact path={'/cart'} component={Cart} />
            </Switch>
        </>
    );
};
export default Router;
