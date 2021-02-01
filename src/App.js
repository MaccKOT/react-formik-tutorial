import React from 'react';
import { hot } from 'react-hot-loader/root';

import { Styles } from './Styles';

class App extends React.Component {
  render() {
    return (
      <Styles>
        <h1>Hello </h1>
      </Styles>
    );
  }
}

export default hot(App);
