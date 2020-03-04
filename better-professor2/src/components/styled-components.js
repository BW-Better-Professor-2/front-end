import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
  padding: .5rem;
  border-radius: 10px;
  background-color: #2196F3;
  width: 30rem;
  border-style: none;
  color: white;
  transition: .25s;
  text-transform: capitalize;
  background: dodgerblue;
  color: white;
  border-style: none;
  margin-top: 5%;
  font-size: 2.4rem;
  font-weight: bold;
  transition: .25s;
  padding: 1rem 4rem;
  border-radius: 10px;
  border: solid 1px #ddd;
  text-align: center;
  &[type="submit"]:hover {
    background-color: #0A2738;
  }
`;

export const FormField = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const FormInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  max-width: 30rem;
`;

export const FormPage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5rem;
`;

export const Input = styled.input`
  border-radius: 5px;
  padding: .5rem;
  width: 30rem;
  margin-bottom: 0;
  &:focus {
    border-color: dodgerblue;
  }
`;

export const LoginForm = styled.div `
    disply: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    padding 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;

`;

