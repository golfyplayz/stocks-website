import React, { useState, useEffect } from 'react';
import NavBar from '../components/nav';
import useWindowWidth from '../components/width';

function Login() {
    const width = useWindowWidth();
    return (
        <div id='container'>
            <NavBar width={width} />
            <div className="body">
                <div className="login">
                    <h1>Login</h1>
                    <form>
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required></input>
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required></input>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;