import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  useParams
} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>짱구</h2>
      <p>짱구네 오신것을 환영합니다.</p>{' '}
      <img
        src={require('./images/bodo_still06.jpg')}
        alt="짱구는 못말려 단체사진"
        style={{ width: '700px' }}
      ></img>
    </div>
  );
}

let contents = [
  {
    id: 1,
    title: '이야기. 하나',
    description: '춤추는 짱구와 친구들',
    imgSrc: './images/722335bd9802de768767df9795096854.gif'
  },
  {
    id: 2,
    title: '이야기. 둘',
    description: '초코비 먹는 짱구',
    imgSrc: './images/unnamed.gif'
  }
];

function Topic() {
  var params = useParams();
  var topic_id = params.topic_id;
  var selected_topic = {
    title: 'Sorry',
    description: 'Not Found'
  };
  for (var i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      selected_topic = contents[i];
      break;
    }
  }
  return (
    <div>
      <img
        src={require(`${selected_topic.imgSrc}`)}
        alt={selected_topic.description}
        style={{ width: '500px' }}
      ></img>
    </div>
  );
}

function Topics() {
  var lis = [];
  for (var i = 0; i < contents.length; i++) {
    lis.push(
      <li key={contents[i].id}>
        <NavLink to={'/topics/' + contents[i].id}>{contents[i].title}</NavLink>
      </li>
    );
  }
  return (
    <div>
      <h2>짱구 이야기</h2>
      <ul className="topics">{lis}</ul>
      <Route path="/topics/:topic_id">
        <Topic></Topic>
      </Route>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h2>짱구네 집</h2>
      <p>주소 : 서울특별시 초록구 떡잎마을</p>
      <img
        src={require('./images/house.jpg')}
        alt="짱구네 집"
        style={{ width: '500px' }}
      ></img>
    </div>
  );
}

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

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
