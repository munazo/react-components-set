import React from 'react';
import Input from './Input/Input';

class App extends React.Component {
  constructor() {
    super();
    this.changeTitle = this.changeTitle.bind(this);
    this.state = {
      title: 'TITLE HERE!',
    };
  }

  changeTitle(title) {
    this.setState({ title });
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Input changeTitle={this.changeTitle} />
      </div>
    );
  }
}
export default App;
