import React, {Component} from 'react'
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWtihAuth';

export default class Login2 extends Component {

    constructor (props) {
        super (props);

        this.state = {
            username: "",
            password:"",
            loginErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log('handle change')
    }

    handleSubmit(event) {

        const {
            username,
            password
        } = this.state;

        axiosWithAuth().post('/auth/login', {
            user:{
                username: username,
                password: password
            }
        },
        {withCredentials: true}
        )
        .then(response =>{
            console.log('login response: ', response)
            if(response.data.logged_in) {
                this.props.handledSuccessfulAuth(response.data);
            }
        })
        .catch.log(error =>{
            console.log('login error: ', error)
        });
        console.log('login submitted');
        event.preventDefault();
    }

    render() {
        return  (
            <div>
                <form onSubmit={this.handleSubmit}>

                <input type='username' 
                name='username' 
                placeholder="Enter Email" 
                value={this.state.username} 
                onChange={this.handleChange} 
                required
                /> 

                <input type='password' 
                name='password' 
                placeholder="Enter Password" 
                value={this.state.password} 
                onChange={this.handleChange} 
                required
                /> 

                <button type='submit'>Login</button>


                </form>
            </div>
        )
    }

}

