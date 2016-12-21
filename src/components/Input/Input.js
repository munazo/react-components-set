import React, { PropTypes } from 'react';

require('./Input.styl');

class Input extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.changeTitle(e.target.value);
  }

  render() {
    return (
      <input
        className="Input"
        onChange={this.handleChange}
      />
    );
  }
}

Input.propTypes = {
  changeTitle: PropTypes.func.isRequired,
};

export default Input;
