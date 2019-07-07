import React from 'react';

function Conditional(props) {
   
        return (
            <div>
                <header>{props.login ? <h1>Login</h1> : <h1>Log Out</h1>}</header>
                <div>
                
                <button onClick={props.togle}>{props.login ?'Logout': 'Login'}</button>
                </div>
                <footer>Footer here</footer>
            </div>
        )
    }

export default Conditional