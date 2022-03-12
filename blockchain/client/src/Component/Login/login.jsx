import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router';
import Alert from '../Alert/alert';
import './login.css';
import axios from 'axios';

const Login = () => {

    const [email, updateEmail] = useState("");
    const [password, updatePassword] = useState("");
    const [alert, updateAlert] = useState({
        type: ''
    }); 

    const navigate = useNavigate();

    const formHandler = async (e) => {
        // Client side validation has already taken place
        e.preventDefault();
        e.target.reset();

        const options = {
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({ "user": {
            "email" : email,
            "password" : password
        }});

        try {
            const loginTokenRequest = await axios.post('http://localhost:5050/loginForm', body, options);
            
            if (loginTokenRequest.status === 201){
                localStorage.setItem('token', loginTokenRequest.data.token);
                navigate("/");
            }
            else {
                updateAlert((prevState) => {
                    return {
                        ... prevState,
                        type: "LOG_IN_FAILURE"
                    }
                });
            }
        }
        catch (err) {
            console.log(err);
            updateAlert((prevState) => {
                return {
                    ... prevState,
                    type: "LOG_IN_FAILURE"
                }
            });
        }
    }  

    let alertHandler = (
        <Alert alertType={alert.type} />
    )

    if (localStorage.getItem('token')) {
        return <Navigate to="/" />
    }
    else {
        return (
            <div className="login-form">
                {alertHandler}
                <div class="container login-container">
                    <h4 class="login-form-title">Login Form</h4>
                    <form class="login-form" onSubmit={formHandler}>
                        <div class="form-group">
                            <input onChange={e => updateEmail(e.target.value)} name="email" type="email" class="form-control" placeholder="Email" required />
                        </div>
                        <div class="form-group">
                            <input onChange={e => updatePassword(e.target.value)} name="password" type="password" class="form-control" placeholder="Password" required />
                        </div>
                        <button type="submit" class="btn login-button btn-success">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;