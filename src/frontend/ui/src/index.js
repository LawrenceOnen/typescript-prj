import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from "redux";
import reducer from './reducer';
import {Provider} from "react-redux";
 
//Create reduc store

const store = createStore(reducer);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}></Provider>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const elt = document.createElement("h1");
const brand = document.createTextNode("Brand Name");
 elt.appendChild(brand);
 document.body.appendChild(elt);
const url = document.baseURI;
console.log(url);
const divs = document.querySelectorAll('div');
console.log(divs);