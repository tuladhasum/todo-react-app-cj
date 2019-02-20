import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import Todo from './components/Todo/Todo';
class App extends Component {
  render() {
    return (
      <Container>
        <Todo />
      </Container>
    );
  }
}




export default App;
