import React from 'react'
import logo from '../../assets/img/logo.png';
import search from '../../assets/img/search.png';
import cart from '../../assets/img/cart.png';
import avatar from '../../assets/img/avatar.png';

function navbar() {
    return (
        <div>
            <header id="header1">
                <img class="logo" src={logo} alt="" />
                <ul class="nav">
                    <li><img src={search} /></li>
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

        </div>
    )
}

export default navbar