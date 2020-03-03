import React from 'react';
import Login from './Login';

export default function ErrorMessage ({error}) {
    if (error) {
        switch(error.type) {
            case 'required':
                return <p>This is required</p>;
            case 'minLength':
                return <p>You need at least 7 characters</p>;
            case 'pattern':
                return <p>Enter a valid email address</p>;
            case 'min':
                return <p>Minimum age is 18</p>;
            case 'validate':
                return <p>Username is already used</p>;
            default:
                return null;
        }
    }
    return null;
}