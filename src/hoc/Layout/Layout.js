import React from 'react';
import classes from './Layout.module.css';
import Header from './../../parts/Header/Header';
const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Header mainPage={true} />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
