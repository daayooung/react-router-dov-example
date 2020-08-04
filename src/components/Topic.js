import React from 'react';
import { useParams } from 'react-router-dom';

function Topic({ contents }) {
  let params = useParams();
  console.log(params);
  let topic_id = params.topic_id;
  console.log(topic_id);
  let selected_topic = {
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

export default Topic;
