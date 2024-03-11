import React, { createContext, useContext, useEffect, useState } from 'react';
import './App.css';
import {observer} from "mobx-react-lite";
import LoginForm from './components/LoginForm';
import Store from './store';
import { Context } from '.';
import UserService from './service/UserService';
import { IUser } from './models/IUser';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Account from './pages/Account';
import Artist from './pages/Artist';
import Marketplace from './pages/Marketplace';
import Nft from './pages/Nft';
import Rankings from './pages/Rankings';
import Wallet from './pages/Wallet';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';


export const SearchContext = createContext({
  searchValue: '',
  setSearchValue: () => {},
});


function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const { searchValue, setSearchValue } = useContext(SearchContext); //
  const {store} = useContext(Context);

  
  useEffect(()=>{
    const email = localStorage.getItem('email') || ''; // Provide an empty string as the default value
    const password = localStorage.getItem('password') || ''; // Provide an empty string as the default value
    store.login(email, password);
    console.log(store.user.iduser)
  }, [])
  // useEffect(()=>{
  //   if(localStorage.getItem('token')){
  //     store.checkAuth();
  //   }
  // }, [])
  // if(store.isLoading){
  //   return(
  //   <div>Загрузка...</div>
  //   )
  // }
  // if(!store.isAuth){
  //   return(
  //   <LoginForm/>
  //   )
  // }
  // else{
    
    
    return (
      // <div className="App">
      //   <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}`:`Авторизуйтесь`}</h1>
      //   <button onClick={()=>store.logout()}>Выйти</button>
       
      //   {users.map(user=>
      //     <div key={user.id}>{user.email}</div>
      //     )}
      //   </div>
      <>
       <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header/>
        <main className='main'>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/login" element={<Login />} />
            <Route path="/artist/:id" element={<Artist />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/nft/:id" element={<Nft />} />
            <Route path="/rankings" element={<Rankings />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/myprofile" element={<MyProfile />} />
            </Routes>
        </main>
        <Footer/>
      </SearchContext.Provider>
      </>
    );
  // }
  
}

export default observer(App);
