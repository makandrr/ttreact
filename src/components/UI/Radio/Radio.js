import React from 'react';
import classes from './Radio.module.css';

const Radio = (props) => {
  const htmlFor = `checkbox-${Math.random()}`;
  return (
    <div className={classes.Radio}>
      <input type="radio" id={htmlFor} onChange={props.onCheck} />
      <label htmlFor={htmlFor}></label>
      <span>{props.children}</span>
    </div>
  );
};

export default Radio;
