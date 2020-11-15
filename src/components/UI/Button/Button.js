import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
  const cls = [classes.Button];
  if (props.color === 'primary') {
    cls.push(classes.green);
  } else if (props.color === 'secondary') {
    cls.push(classes.blue);
  } else {
    cls.push(classes[props.color] || classes.green);
  }

  cls.push(classes[props.size] || classes.small);
  return (
    <button onClick={props.onClick} className={cls.join(' ')}>
      {props.children}
    </button>
  );
};

export default Button;
