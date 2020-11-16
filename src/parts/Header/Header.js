import React, { Component } from 'react';
import searchIcon from './search-white.png';
import logo from './logo.png';
import Button from './../../components/UI/Button/Button';
import classes from './Header.module.css';
class Header extends Component {
  state = {
    links: [
      {
        label: 'О нас',
        to: 'https://google.com',
        active: false,
      },
      {
        label: 'Услуги',
        to: 'https://google.com',
        active: false,
      },
      {
        label: 'Тарифы',
        to: 'https://google.com',
        active: false,
      },
      {
        label: 'Блог',
        to: 'https://google.com',
        active: false,
      },
      {
        label: 'Работа',
        to: 'https://google.com',
        active: false,
      },
    ],
  };
  renderLinks = () => {
    return this.state.links.map((link, index) => {
      return (
        <li key={index}>
          <a className={link.active ? classes.active : ''} href={link.to}>
            {link.label}
          </a>
        </li>
      );
    });
  };
  render() {
    const cls = [
      classes.Header,
      this.props.mainPage ? classes.mainPageStyle : '',
    ];
    return (
      <header className={cls.join(' ')}>
        <div className={'container ' + classes.container}>
          <h1>
            <img src={logo} alt="Логотип" />
          </h1>
          <ul>
            {this.renderLinks()}
            <li>
              <a href="https://google.com">
                <img src={searchIcon} alt="Поиск" />
              </a>
            </li>
          </ul>
          <Button size="medium">Подключиться</Button>
        </div>
        {this.props.mainPage ? (
          <div className="container">
            <h2>We empower power wower dower</h2>
          </div>
        ) : null}
      </header>
    );
  }
}

export default Header;
