import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import './App.css';

const isActiveFunc = (match, location) => {
  console.log(match, location);
  return match
}

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink isActive={isActiveFunc} activeClassName="active" to="/about">About</NavLink>
    <NavLink isActive={isActiveFunc} activeClassName="active" to="/contact">Contact</NavLink>
  </nav>
);

const Contacts = () => {
  return (
    <div>
      <h1>Contact</h1>
      <NavLink exact activeClassName="active" to="/">Home</NavLink>
    </div>
  );
}

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/about/:info?" render={(data) => (
        <h1>
          About<br />
          Info: {data.match.params.info}
        </h1>
      )} />
      <Route path="/contact" render={Contacts} />
    </div>
  </Router>
);

export default App;