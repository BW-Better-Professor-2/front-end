import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import {useForm} from 'react-hook-form';
import {FormPage, FormField, FormInfo, Button, Input, ImgDiv} from "styled-components"

function Login()  {

    const history = useHistory('');
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [notMatching, setNotMatching] = useState('');

    const changeUser = e => {
        setUser(e.target.value);
    }

    const changePW = e => {
        setPassword(e.target.value);
    }

    const changeConfirmPW = e => {
        setConfirmPassword(e.targe.value);
    }

    const changeEmail = e => {
        setEmail(e.target.value);
    }

    const {
        register,
        handleSubmit,
        errors} = useForm();

    const onSubmit = () => {
        (password === confirmPassword) ? ( //<--IF THIS THEN, -->
            axios.post('https://better-professor-bw.herokuapp.com/api/auth/register', {
                'username': email.toString(),
                'password': password.toString(),
            })
            .then(response => {
                console.log('User successfully created.')
            })
            .then (response2 => {
                console.log('Logged in successfully as new user')
                localStorage.setItem('token', response2.data.token);
                localStorage.setItem('professorID', response2.data.id)
                history.push('/dashboard')
            })
            .catch(error => {
                console.log('Failed to register.', error)
            })
        ) : // <--IF NOT THEN --> 
        (setNotMatching('Passwords do not match!'))
    }

    return(

        <FormPage>
            <FormField onSubmit={handleSubmit(onSubmit)}>
                <h1>Create an Account</h1>
                {/* Email */}
                <FormInfo>
                    <label htmlFor='email'>Email</label>
                    <Input 
                        type ='email'
                        name ='email'
                        id = 'email'
                        onChange={changeEmail}
                        value={email}
                        placeholder='Enter email address'
                        ref={register({required: "Must enter a valid email address"})}
                    />
                </FormInfo>
            </FormField>
        </FormPage>

    );
}

export default Login;