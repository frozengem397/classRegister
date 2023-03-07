import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header';
import ClassList from './ClassList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div style ={{backgroundColor:"black"}}>
    <Header />
    <div className= "col text-white">
      <div className = "row">
        <span className = "h1 text-warning text-center">Class</span>
        <ClassList />
      </div>
    </div>
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

