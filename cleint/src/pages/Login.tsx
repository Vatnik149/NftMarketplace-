import React, { FC, useContext, useState } from 'react'
import { Context } from '..';

const Login:FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
  
    const { store } = useContext(Context);
  
    const handleRegistration = (e:any) => {
        e.preventDefault(); 
        store.login(email, password);
        console.log("Пользователь", store.user);

        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    };
  
    return (
      <form action="URL" className="account__form">
        <input
          className="account__input account__input--mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email Address"
        />
        <input
          className="account__input account__input--lockkey"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <button onClick={(e) => handleRegistration(e)} className="account__button">
          Create account
        </button>
      </form>
    )
}

export default Login
