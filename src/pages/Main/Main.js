import React, { Component } from 'react';
import classes from './Main.module.css';
import gsap from 'gsap';
class Main extends Component {
  render() {
    return <div className={classes.Main}></div>;
  }

  componentDidMount() {
    const hero = document.getElementById('hero');
    gsap.to(hero, { boxShadow: 'inset 0 0 3em 4em #fff', duration: 3 });
  }
}

export default Main;
