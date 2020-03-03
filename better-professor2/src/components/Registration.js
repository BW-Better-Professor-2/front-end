import React, {Component} from 'react'
import axios from 'axios';
import axiosWithAuth from '../utils/axiosWtihAuth';

export default class Registration extends Component {

    constructor (props) {
        super (props);

        this.state = {
            username: "",
            password:"",
            confirmPassword: "",
            registrationErrors: ""
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
            password,
            confirmPassword
        } = this.state;

        axios.axiosWithAuth.post('/auth/register', {
            user:{
                username: username,
                password: password,
                confirmPassword: confirmPassword
            }
        })
        console.log('form submitted');
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
                placeholder="Create Password" 
                value={this.state.password} 
                onChange={this.handleChange} 
                required
                /> 

                <input type='username' 
                name='username' 
                placeholder="Enter Email" 
                value={this.state.confirmPassword} 
                onChange={this.handleChange} 
                required
                /> 

                <button type='submit'>Register</button>


                </form>
            </div>
        )
    }

}