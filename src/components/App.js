import React from 'react';

import ListItem from './ListItem';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['end', 'middle', 'beginning'],
      selectedItemIndex: null,
      solutionItems: ['beginning', 'middle', 'end'],
      solved: ''
    };
  }

  checkSolution() {
    console.log('check');
    let solved = true;
    for (let i = 0; i < this.state.solutionItems.length; i++) {
      if (this.state.items[i] !== this.state.solutionItems[i]) {
        solved = false;
      }
    }
    console.log('console solved', solved);

    if (solved) {
      this.setState({ solved: 'Solution complete!' });
    }
  }

  handleOnKeyPress(key) {
    if (key === 'ArrowUp') {
      this.moveUp();
    }
    else if (key === 'ArrowDown') {
      this.moveDown();
    }
    else {
      alert("Please press UP or DOWN to reorder your list!");
    }
  }

  moveUp() {
    if (this.state.selectedItemIndex === 0) {
      return;
    }

    const swappingIndex = this.state.selectedItemIndex;
    const originalIndex = this.state.selectedItemIndex - 1;


    const temporaryArray = this.state.items.slice(0, this.state.items.length);
    const savedItem = temporaryArray[originalIndex];
    temporaryArray[originalIndex] = temporaryArray[swappingIndex];
    temporaryArray[swappingIndex] = savedItem;

    this.setState({ items: temporaryArray, selectedItemIndex: originalIndex }, function () {
      this.checkSolution();
    });

  }

  moveDown() {
    if (this.state.selectedItemIndex === this.state.items.length - 1) {
      return;
    }

    const swappingIndex = this.state.selectedItemIndex;
    const originalIndex = this.state.selectedItemIndex + 1;


    const temporaryArray = this.state.items.slice(0, this.state.items.length);
    const savedItem = temporaryArray[originalIndex];
    temporaryArray[originalIndex] = temporaryArray[swappingIndex];
    temporaryArray[swappingIndex] = savedItem;

    this.setState({ items: temporaryArray, selectedItemIndex: originalIndex }, function () {
      this.checkSolution();
    });
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
    return <div className="list" onKeyUp={(event) => this.handleOnKeyPress(event.key)} tabIndex="0">
      <span>{this.state.solved}</span>
      {contents}
    </div>;
  }
}
