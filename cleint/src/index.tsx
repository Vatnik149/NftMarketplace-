import React from 'react';
import  { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Store from './store';
import { BrowserRouter } from 'react-router-dom';


interface Storages{
  store:Store,
}
const store = new Store();

export const Context = createContext<Storages>({
  store,
})
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Context.Provider value={{store}}>
    <App />
  </Context.Provider>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
