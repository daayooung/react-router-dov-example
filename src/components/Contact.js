import React from 'react';

function Contact() {
  return (
    <div>
      <h2>짱구네 집</h2>
      <p>주소 : 서울특별시 초록구 떡잎마을</p>
      <img
        src={require('../images/house.jpg')}
        alt="짱구네 집"
        style={{ width: '500px' }}
      ></img>
    </div>
  );
}

export default Contact;
