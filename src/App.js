import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/calculator" component={CalculatorPage} />
          <Route path="/quote" component={QuotePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
