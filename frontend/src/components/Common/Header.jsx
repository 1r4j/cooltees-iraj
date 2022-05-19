import React from 'react'
import backgroundImg from '../../assets/img/main-background.png';
import logo from '../../assets/img/logo.png';
import search from '../../assets/img/search.png';
import avatar from '../../assets/img/avatar.png';
import cart from '../../assets/img/cart.png';




export default function Header() {
  return (
    <div><img class="backgroundImg" src={backgroundImg} alt="" />
      <header>
        <img class="logo" src={logo} alt="" />
        <ul class="nav">
          <li><img src={search} alt="Search" /></li>
          <a href="/cart">
            <li>
              <img src={cart} />
            </li>
          </a>

          <a href="/signup">
            <li>
              <img src={avatar} />
            </li>
          </a>
        </ul>
      </header>

      <div class="top">
        <h1>
          Cool Tees for <br />
          MEN & WOMEN
          <hr />
        </h1>
      </div></div>
  )
};
