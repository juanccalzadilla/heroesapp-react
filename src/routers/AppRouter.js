import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardRoute } from './DashBoardRoute';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={user.logged}/>

                    <PrivateRoutes path="/" component={DashBoardRoute} isAuthenticated={user.logged}/>

                </Switch>
            </div>
        </Router>
    )
}
