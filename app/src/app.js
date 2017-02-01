if (process.env.NODE_ENV !== 'production') { // 개발용 버전에서만 HTML 핫리로드
  require('./index.html');
}
import './style.css';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  (<h1>Hello, World!</h1>),
  document.querySelector('#root')
);