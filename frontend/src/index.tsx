import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {configureStore, createStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import {LoginReducer} from "./Reducers/LoginReducer";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

export const storeData = {
    loggedUser: {
        status: "error",
        token: "",
        username: ""
    },
    localUser: {
        password: "",
        username: ""
    }
}

// @ts-ignore
export const store = createStore(LoginReducer,storeData);
// export const store = configureStore({
//     reducer: {
//         LoginReducer: LoginReducer
//     },
//     // @ts-ignore
//     preloadedState: storeData
// })

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
