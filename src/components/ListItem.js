import React from 'react';

export default function ListItem(props) {
  return (
    <div className="list-item" draggable="true" onClick={() => console.log('CLICK!')}>
      <p>{props.name}</p>
    </div>
  );
}
