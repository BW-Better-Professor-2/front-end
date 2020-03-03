
import axios from 'axios';
import React from 'react';
import {useHistory} from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWtihAuth';
import {useForm} from 'react-hook-form';
import ErrorMessage from './ErrorMessage';
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
          <Input className="styleInput3" id="email" placeholder="Enter Email Here" name="Email" ref={register({ required: true })} />
          <ErrorMessage error={errors.firstName} />

          <label htmlFor="password">Password</label>
          <Input className="styleInput3" id="password" placeholder="Enter Password Here" name="PassWord" type="password" ref={register({ required: true, minLength: 2 })} />
          <ErrorMessage error={errors.firstName} />


          <ErrorMessage error={errors.gender} />



            {e => validateUserName(e.target.value)}
            {register({ required: true, validate: validateUserName })}

          <ErrorMessage error={errors.username} />



            {register({ required: true, pattern: /^\S+@\S+$/i })}

          <ErrorMessage error={errors.email} />



            {register({ required: true, min: 18 })}

          <ErrorMessage error={errors.age} />

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