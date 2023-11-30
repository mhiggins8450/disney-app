import React from 'react';
import './App.css';
import Banner from './components/Banner/banner';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Shop</h1>
      </header>
      <main>
        <p>This is where your main content will go.</p>
      </main>
      <footer>
        <p>&copy; 2023 My Shop. All rights reserved.</p>
      </footer>
      <Banner />
    </div>
  );
}

export default App;
