import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Topic from './Topic';

const contents = [
  {
    id: 1,
    title: '이야기. 하나',
    description: '춤추는 짱구와 친구들',
    imgSrc: '../images/content_01.gif'
  },
  {
    id: 2,
    title: '이야기. 둘',
    description: '초코비 먹는 짱구',
    imgSrc: '../images/content_02.gif'
  }
];

function Topics(props) {
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
      <Route path="/topics" exact render={() => <div></div>} />
      <Route path="/topics/:topic_id">
        <Topic contents={contents} />
      </Route>
    </div>
  );
}

export default Topics;
