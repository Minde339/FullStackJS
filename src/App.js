import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Main from "./Components/Main/Main";
import Home from "./Components/Home/Home";
import AddCompanyForm from "./Components/Company/AddCompanyForm/AddCompanyForm";
import ModifyCompany from "./Components/Company/ModifyCompany/ModifyCompany";

function App() {
  return (
    <Router>
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link className="link" to="/">
                Pagrindinis
              </Link>
            </li>
            <li>
              <Link className="link" to="/companies">
                Įmonės
              </Link>
            </li>
            <li>
              <Link className="link" to="/addCompanyForm">
                Pridėti įmonę
              </Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/companies">
            <Main />
          </Route>
          <Route path="/addCompanyForm">
            <AddCompanyForm />
          </Route>
          <Route path="/modifyCompany/:id">
            <ModifyCompany />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
