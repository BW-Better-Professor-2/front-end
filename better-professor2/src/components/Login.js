
import axios from 'axios';
import React from 'react';
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWtihAuth';
import {useForm} from 'react-hook-form';
import {LoginForm, FormField, FormInfo, Button, Input} from './styled-components';

const Login = () => {
    const history = useHistory();
    const {
      register,
      handleSubmit,
      errors,
      setError,
      clearError,
      formState: { isSubmitting }
    } = useForm();

    const onSubmit = data => {
      const username = data.Email;
      const password = data.PassWord;

      axiosWithAuth()
      .post(`/auth/login`, {username, password})
      .then(res=> {
          console.log("login successfull")
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("professorID", res.data.id);
          history.push("/dashboard")
      })
      .catch(err=>{
          console.log(err, "failed to login")
      })
    }

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const validateUserName = async value => {
      await sleep(1000);
      if (value !== "bill") {
        setError("username", "validate");
      } else {
        clearError("username");
      }
    };

  return (
  <LoginForm>
    
      
        <FormField className="loginForm" onSubmit={handleSubmit(onSubmit)}>
          <h1>Log In</h1>
          <FormInfo>
          <label htmlFor="email">Email</label>
          <Input className="styleInput3" id="email" placeholder="Enter Email Here" name="email" ref={register({ required: 'Please enter email', requred : true })} />
          {errors.email && console.log('Login Email error: ', errors.email) && <p>{errors.email.message}</p>}

          <label htmlFor="password">Password</label>
          <Input className="styleInput3" id="password" placeholder="Enter Password Here" name="passWord" type="password" ref={register({ required: 'Please enter password', required: true, minLength: 2 })} />
          {errors.email && console.log('Login Password Error: ', errors.password) && <p>{errors.email.message}</p>}
        </FormInfo>
        <Button>
          Login
          </Button>
        <div>Don't have an account? <span className="underline" onClick={()=>history.push("/registration")}>Create one here.</span></div>
        </FormField>
    
    <div className="sectionContainer2">
      <div id="signUp">
        {/* Sign Up Graphic Here */}
      </div>
    </div>
    
    </LoginForm>
    
  );
}

export default Login;