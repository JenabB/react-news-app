import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import News from './News';
import Islami from './Islami';
import Tentang from './pages/tentang/Tentang';
import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/tentang" component={Tentang} />
          <Route path="/islami" component={Islami} />
          <Route path="/" component={News} />
        </Switch>

        <nav>
          <ul className="flex text-white font-bold fixed bg-blue-600 bottom-0 w-full justify-evenly">
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
