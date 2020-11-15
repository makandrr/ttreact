import React from 'react';
import classes from './Checkbox.module.css';

const Checkbox = (props) => {
  const htmlFor = `checkbox-${Math.random()}`;
  return (
    <div className={classes.Checkbox}>
      <input type="checkbox" id={htmlFor} onChange={props.onCheck} />
      <label htmlFor={htmlFor}></label>
      <span>{props.children}</span>
    </div>
  );
};

export default Checkbox;
