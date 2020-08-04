import React from 'react';

function Home() {
  return (
    <div>
      <h2>짱구</h2>
      <p>짱구네 오신것을 환영합니다.</p>{' '}
      <img
        src={require('../images/bodo_still06.jpg')}
        alt="짱구는 못말려 단체사진"
        style={{ width: '700px' }}
      ></img>
    </div>
  );
}

export default Home;
