import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Navbar } from './app/Navbar';
import { Footer } from './app/Footer';

function App() {
  return (
    <Router>
      <header>
        <h1>5e Tools</h1>
        <Navbar />
      </header>
      <div className="App">
        <Switch>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
