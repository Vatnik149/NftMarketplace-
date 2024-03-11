import React, { FC, useContext, useState } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const RegistrationForm: FC = () => {
  const [username, setUserName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [repass, setRepass] = useState<string>('');

  const { store } = useContext(Context);

  const handleRegistration = (e:any) => {
    e.preventDefault(); 
    if (password === repass) {
      store.registration(email, password, username);
      console.log("Пользователь", store.user);
      window.location.href = '/login';

    } else {
      setPassword("Пароли не совпадают")
    }
  };

  return (
    <form action="URL" className="account__form">
      <input
        className="account__input account__input--user"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="Username"
      />
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
      <input
        className="account__input account__input--lockkey"
        value={repass}
        onChange={(e) => setRepass(e.target.value)}
        type="password"
        placeholder="Confirm Password"
      />
      <button onClick={(e) => handleRegistration(e)} className="account__button">
        Create account
      </button>
    </form>
  );
};

export default observer(RegistrationForm);
