import React from 'react';
import './App.css';
import Banner from './components/Banner/banner';
import Header from './components/Header/Header';
import Search from './components/Search/search';
import Free from './components/Hero/Free/free';

function App() {
  return (
    <div className="App">
      <Banner />
      <Header />
      <Search />
      <Free />
    </div>
  );
}

export default App;
