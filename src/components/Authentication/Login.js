import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Auth from './Auth';
import './Auth.css';
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const[email, setEmail]= useState('');
    const[password, setPassword] = useState('');

    const[registerForm, setRegisterForm] = useState(false);

    const isFieldValid = (e) => {
        let fieldValid;
        const regexForEmail= /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/;
        const regexForPassword= /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(e.target.name === 'email'){
            fieldValid= regexForEmail.test(e.target.value)
        }
        if(e.target.name === 'password'){
            fieldValid= regexForPassword.test(e.target.value)
        }
        if(fieldValid){
            console.log('ok')
        }
    }
    
    const handleSubmit = (e) => {
        signInWithEmailAndPassword(Auth, email, password)
        .then((userCredential) => { 
            const user = userCredential.user;
            alert('successfully login')
        })
        .catch((error) => {
            alert(error);
        });
        e.preventDefault();
    }
    
    return (
        <Form className='login-form' onSubmit={() => handleSubmit()}>
            {
                registerForm ? <h3>Create an account</h3> : <h3>Login</h3>
            }
            {
                registerForm && <> <input type="text" name="name" placeholder='First Name' className='input-field' /> <br /> </>
            }
            {
                registerForm && <> <input type="text" name="name" placeholder='Last Name' className='input-field' /> <br /> </>
            }
            <input type="email" name="email" placeholder='Username or Email' className='input-field' onBlur={isFieldValid}/> 
            <br />
            <input type="password" name="Password" placeholder='Password' className='input-field' onBlur={isFieldValid}/> 
            <br />
            {
                registerForm && <> <input type="password" name="Password" placeholder='Confrim Password' className='input-field' onBlur={isFieldValid}/>  <br /> </>
            }
            {
                registerForm === false && 
                <div className='d-flex justify-content-between'>
                    <fieldset>
                        <input type="checkbox" name="user" />
                        <label htmlFor="user" className='ms-2'>Remember Me</label>
                    </fieldset>
                    <small className='user-helper'>Forget Password</small>
                </div>
            }
            <br />
            {
                registerForm ? <input type="submit" value="Register" /> : <input type="submit" value="Login" />
            }
            <p className='text-center'><small>{registerForm ? "Already have an Account? " : "Don't have an Account? "} <span className='user-helper' onClick={() => setRegisterForm(!registerForm)}>{registerForm ? "Login" : "Create an account"}</span></small></p>
        </Form>
    );
};

export default Login;