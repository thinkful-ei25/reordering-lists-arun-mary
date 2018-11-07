import React from 'react';

export default function ListItem(props) {
  return (
    <div className="list-item">
      <p>{props.name}</p>
    </div>
  );
}
