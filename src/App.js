import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Navbar } from './app/Navbar';
import { Footer } from './app/Footer';
import { Home } from './features/home/Home';
import { HeroCreator3e } from './features/hero-creator-3e/HeroCreator3e';

function App() {
  return (
    <Router>
      <header>
        <Link className="main-home-header" to="/">Mutants and Masterminds Tools</Link>
        <Navbar />
      </header>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/heroCreator3e" component={HeroCreator3e} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
