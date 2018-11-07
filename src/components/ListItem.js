import React from 'react';

export default function ListItem(props) {
  return (
    <div className="list-item" draggable="true" onClick={() => props.commChannel(props.id)}>
      <p>{props.name}</p>
    </div>
  );
}
