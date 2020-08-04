import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './components/Home';
import Topics from './components/Topics';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div>
      <h1>짱구는 못말려!</h1>
      <ul className="nav">
        <li>
          <NavLink exact to="/">
            짱구
          </NavLink>
        </li>
        <li>
          <NavLink to="/topics">짱구 이야기</NavLink>
        </li>
        <li>
          <NavLink to="/contact">짱구네 집</NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/topics">
          <Topics></Topics>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/">페이지를 찾을 수 없습니다.</Route>
      </Switch>
    </div>
  );
}

export default App;
