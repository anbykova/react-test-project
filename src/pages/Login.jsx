import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginService from '../services/LoginService';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const onClick = async (e) => {
    e.preventDefault();
    await LoginService.login({ username, password });
    navigate('/');
  };

  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  return (
    <section className="Content">
      <form className="LoginForm">
        <label
          htmlFor="Username"
        >
          Username
        </label>
        <input
          placeholder={"Enter username"}
          id="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value) }
        />
        <label
          htmlFor="Password"
        >
          Password
        </label>
        <input
          placeholder={"Enter password"}
          id="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value) }
        />
        <input type="submit" value="Send" onClick={onClick}/>
      </form>
    </section>
  );
}
