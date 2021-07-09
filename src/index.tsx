import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Modal from 'react-modal';

import { GithubProvider } from './contexts/githubContext';

import GlobalStyles from './styles/GlobalStyles';

Modal.setAppElement('#root');

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <GithubProvider>
      <App />
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById('root')
);