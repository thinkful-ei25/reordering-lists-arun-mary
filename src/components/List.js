import React from 'react';

import ListItem from './ListItem';

export default function List(props) {
  const contents = props.itemChannel.map((item, index) => {
    return <ListItem name={item} key={index} />;
  });

  return (
    <div className="list">
      {contents}
    </div>
  );
}
