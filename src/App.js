import React from 'react';
import './App.css';
import Banner from './components/Banner/banner';
import Header from './components/Header/Header';
import Search from './components/Search/search';

function App() {
  return (
    <div className="App">
      <Banner />
      <Header />
      <Search />
    </div>
  );
}

export default App;
