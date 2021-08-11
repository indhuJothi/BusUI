import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main';
// import App from './App';
// import App from './App'
// import reportWebVitals from './reportWebVitals';
// import Table from './table/table';
// import Main from './main'
import Search from './search/search'
import App from '../src/search/selectseat'


ReactDOM.render(
  <React.StrictMode>
  {/* <App/>
  <Table/> */}
  <App/>
  {/* <Search/> */}
  <Main/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
