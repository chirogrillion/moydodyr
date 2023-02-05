import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Main/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;