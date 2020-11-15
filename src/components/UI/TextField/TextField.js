import React, { Component } from 'react';
import classes from './TextField.module.css';

class TextField extends Component {
  state = {
    cls: [classes.TextField],
    value: '',
  };
  onFocus = () => {
    const cls = [...this.state.cls];
    if (!cls.includes(classes.active)) {
      cls.push(classes.active);
    }
    if (!cls.includes(classes.activeborder)) {
      cls.push(classes.activeborder);
    }
    this.setState({
      cls,
    });
  };
  onUnfocus = () => {
    let cls = [...this.state.cls];
    if (cls.includes(classes.active) && this.state.value.length === 0) {
      cls = cls.filter((elem) => elem !== classes.active);
    }
    if (cls.includes(classes.activeborder)) {
      cls = cls.filter((elem) => elem !== classes.activeborder);
    }
    this.setState({
      cls,
    });
  };
  onInput = (e) => {
    this.setState({
      value: e.target.value,
    });
    if (this.props.onInput) {
      this.props.onInput(e);
    }
  };
  render() {
    return (
      <div className={this.state.cls.join(' ')}>
        <label>{this.props.label || 'Введите значение'}</label>
        <input
          onFocus={this.onFocus}
          onBlur={this.onUnfocus}
          onInput={this.onInput}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default TextField;
