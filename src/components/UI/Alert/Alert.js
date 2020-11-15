import React, { Component } from 'react';
import classes from './Alert.module.css';
import ErrorIcon from './error.png';
import SuccessIcon from './success.png';
import WarningIcon from './warning.png';
import CloseIcon from './close.png';

class Alert extends Component {
  render() {
    const cls = [classes.Alert];
    if (this.props.isOpened) {
      cls.push(classes.opened);
    }
    cls.push(classes[this.props.type] || classes.success);
    let icon;
    let title = this.props.title;
    if (this.props.type === 'error') {
      icon = ErrorIcon;
      title = title || 'Ошибка!';
    } else if (this.props.type === 'warning') {
      icon = WarningIcon;
      title = title || 'Внимание!';
    } else {
      icon = SuccessIcon;
      title = title || 'Успех!';
    }

    return (
      <div className={cls.join(' ')}>
        <img className={classes.icon} src={icon} alt="" />
        <div>
          <h3>{title}</h3>
          <p>{this.props.children}</p>
        </div>
        <img
          className={classes.close}
          src={CloseIcon}
          alt="Закрыть"
          onClick={this.props.onClose}
        />
      </div>
    );
  }
}

export default Alert;
