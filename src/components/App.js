import React from 'react';

import ListItem from './ListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['beginning', 'middle', 'end'],
      selectedItemIndex: null
    };
  }

  render() {
    const contents = this.state.items.map((item, index) => {
      return <ListItem name={item} id={index} key={index}
      isHighlighted={index === this.state.selectedItemIndex}
      commChannel={(selectedItem)=> this.setState({selectedItemIndex: selectedItem})}/>;
    });
  return( 
  <div className="list">
  {contents}
  </div>
  );}
}
