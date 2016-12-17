import React from 'react';

class Input extends React.Component {
  handleChange(e) {
    this.props.changeTitle(e.target.value);
  }

  render() {
    return (
      <input onChange={this.handleChange.bind(this)} />
    );
  }
}

export default Input;
