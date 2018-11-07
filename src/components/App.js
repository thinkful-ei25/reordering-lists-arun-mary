import React from 'react';

import ListItem from './ListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['beginning', 'middle', 'end'],
      selectedItemIndex: null,
    };
  }

  handleOnKeyPress(key) {
  }

  moveForward() {
    if (this.state.selectedItemIndex === 0) {
      return;
    }

    const temporaryArray = this.state.items.slice(0, this.state.items.length);
    const savedItem = temporaryArray[this.state.selectedItemIndex - 1];
    temporaryArray[this.state.selectedItemIndex - 1] = temporaryArray[this.state.selectedItemIndex];
    temporaryArray[this.state.selectedItemIndex] = savedItem;
    this.setState({items: temporaryArray});
  }

  render() {
    const contents = this.state.items.map((item, index) => {
      return (
        <ListItem
          name={item}
          id={index}
          key={index}
          isHighlighted={index === this.state.selectedItemIndex}
          commChannel={(selectedItem) =>
            this.setState({ selectedItemIndex: selectedItem })
          }
        />
      );
    });
    return <div className="list">{contents}</div>;
  }
}
