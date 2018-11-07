import React from 'react';

export default function ListItem(props) {
  if (props.isHighlighted) {
    return (
      <div className="list-item" draggable="true" onClick={() => props.commChannel(props.id)}>
        <p><span style={{backgroundColor: '#ffff00'}}>{props.name}</span></p>
      </div>
    )
  }
  return (
    <div className="list-item" draggable="true" onClick={() => props.commChannel(props.id)}>
      <p>{props.name}</p>
    </div>
  );
}
