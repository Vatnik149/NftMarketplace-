import React, { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '..';  // Make sure to provide the correct path for the Context
import { observer } from 'mobx-react-lite';

const Header: FC = () => {
    const { store } = useContext(Context);

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <a className="header__icon" href="/">
                        <img src="./img/header/Storefront.png" alt="logo" />
                    </a>
                    <a className="header__name" href="/">
                        <img src="./img/header/Marketplace.png" alt="NFT" />
                    </a>
                </div>
                <div className="header__menu">
                    <div className="menu__icon">
                        <span></span>
                    </div>
                    <nav className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item">
                                <Link to="/marketplace" className="menu__link">Marketplace</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/rankings" className="menu__link">Rankings</Link>
                            </li>
                            <li className="menu__item">
                                <Link to="/wallet" className="menu__link">Connect Wallet</Link>
                            </li>
                            {
                                !store.isAuth ? (
                                    <li className="menu__item">
                                        <Link to="/account" className="menu__link menu__link--btn">
                                            <img src="../img/header/User.png" alt="User" />
                                            <span>Sign Up</span>
                                        </Link>
                                    </li>
                                ) : (
                                    <li className="menu__item">
                                        <Link to="/myprofile" className="menu__link menu__link--btn">
                                            <img src="../img/header/User.png" alt="User" />
                                            <span>{store.user.email}</span>
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default observer(Header);
