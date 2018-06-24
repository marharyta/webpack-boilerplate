import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

class App extends React.Component {
  render() {
    return <div> Hello, world! </div>;
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
