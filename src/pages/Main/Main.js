import React, { Component } from 'react';
import classes from './Main.module.css';
import gsap from 'gsap';
class Main extends Component {
  render() {
    return (
      <>
        <div className={classes.heroImage}></div>
        <div className={classes.Main}>
          <div className={classes.hero} id="hero">
            <div className="container">
              <h1>We empower startups and freelancers</h1>
            </div>
          </div>
        </div>
      </>
    );
  }

  componentDidMount() {
    const hero = document.getElementById('hero');
    gsap.to(hero, { boxShadow: 'inset 0 0 3em 1em #fff', duration: 3 });
  }
}

export default Main;
