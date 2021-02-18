import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Posts from './Components/Posts/Posts';
import Main from './Components/Main/Main';
import Companies from './Components/Companies/Companies';

function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link  className="link" to="/companies">Companies</Link>
            </li>
            <li>
              <Link  className="link" to="/posts">Posts</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/companies">
            <Companies />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
