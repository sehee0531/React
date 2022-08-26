import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode> //이것을 하면 class에 정의된 componentDidMount()가 항상 2번 호출된다. 실제 배포하면 1번씩만 호출됨. 제거하면 항상 1번
    <App3 />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
