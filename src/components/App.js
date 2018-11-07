import React from 'react';

import List from './List';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['beginning', 'middle', 'end'],
    };
  }

  render() {
    return <List itemChannel={this.state.items} />;
  }
}
