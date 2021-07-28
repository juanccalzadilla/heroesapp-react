import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'




export const LoginScreen = ({history}) => {
  const {dispatch} = useContext(AuthContext)
    const handleLogin = () =>{
        const lastpath = localStorage.getItem('lastpath') || '/';
        history.replace(lastpath)

        dispatch({
            type: types.login,
            payload:{name:'Juan'}
        })


        
    }
    return (
        <div className='container mt-5 text-center'>
            <h1>Login</h1>
            <hr/>

            <button 
            className="btn btn-outline-primary btn-block"
            onClick={handleLogin}
            
            >Login</button>
        </div>
    )
}
