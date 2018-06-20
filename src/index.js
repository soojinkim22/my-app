import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import FileUpload from './FileUpload';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM은 1개의 컴포넌트를 출력(render)하고 
ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<FileUpload />, document.getElementById('apps'));
registerServiceWorker();
