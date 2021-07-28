import React, { useContext } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
import './navbar.css'

export const Navbar = () => {
    const {user,dispatch} = useContext(AuthContext)
    const history = useHistory();
   
    const handleLogout =() =>{
        dispatch({
            type:types.logout
        })
        history.replace('/login')
    }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <Link
                className="navbar-brand brand text-white"
                to="/"
            >
                Heroes App
            </Link>
            <button className="navbar-toggler border-0 text-white" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav text-center w-100">
                   
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link text-white"
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    
                    <NavLink
                    
                        activeClassName="active"
                        className="nav-item nav-link text-white"
                        exact
                        to="/dc"
                        
                    >
                        DC
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link text-white"
                        exact
                        to="/search"
                    >
                        Search Hero
                    </NavLink>

                    <span className="nav-item nav-link space-between  text-warning">{user.name}</span>
                    <button
                        className="btn btn-outline-danger text-white"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                    
                </div>
            </div>
        </nav>
    )
}