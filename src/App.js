import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import News from './News';
import './App.css';
import Islami from './Islami';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/tentang">
            <About />
          </Route>
          <Route path="/islami" component={Islami} />

          <Route path="/" component={News} />
        </Switch>

        <nav>
          <ul className="flex fixed bg-blue-600 bottom-0 w-full justify-center">
            <li className="p-2">
              <Link to="/">Berita</Link>
            </li>
            <li className="p-2">
              <Link to="/islami">Islami</Link>
            </li>
            <li className="p-2">
              <Link to="/tentang">Tentang</Link>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}
