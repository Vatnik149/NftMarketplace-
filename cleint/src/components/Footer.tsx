import React, { FC, useState } from 'react'
import MailService from '../service/MailService';

const Footer:FC = () => {
    const [email, setEmail] = useState<string>('')
    const handlkesend = (e:any) => {
        e.preventDefault(); 
        MailService.sendMessage(email);
      };
    
  return (
    <footer className="footer">
    <div className="container">
        <div className="footer__content">
            <div className="footer__info">
                <div className="footer__logo">
                    <a className="footer__icon" href="/">
                        <img src="../img/header/Storefront.png" alt="logo"/>
                    </a>
                    <a className="footer__name" href="/">
                        <img src="../img/header/Marketplace.png" alt="NFT"/>
                    </a>
                </div>
                <p className="footer__text">NFT marketplace UI created with Anima for Figma.</p>
                <p className="footer__text">Join our community</p>
                <div className="footer__social">
                    <a className="footer__link" href="#">
                        <img className="footer__img" src="./img/social/discord.png" alt="Discord"/>
                    </a>
                    <a className="footer__link" href="#">
                        <img className="footer__img" src="./img/social/youtube.png" alt="Youtube"/>
                    </a>
                    <a className="footer__link" href="#">
                        <img className="footer__img" src="./img/social/twitter.png" alt="Twitter"/>
                    </a>
                    <a className="footer__link" href="#">
                        <img className="footer__img" src="./img/social/instagram.png" alt="Instagram"/>
                    </a>
                </div>
            </div>
            <div className="footer__nav">
                <h5 className="footer__nav-titel">Explore</h5>
                <nav className="footer__menu">
                    <ul className="footer__menu-list">
                        <li className="footer__menu-item">
                            <a className="footer__link" href="marketplace.html">Marketplace</a>
                        </li>
                        <li className="footer__menu-item">
                            <a className="footer__link" href="rankings.html">Rankings</a>
                        </li>
                        <li className="footer__menu-item">
                            <a className="footer__link" href="connect-wallet.html">Connect a wallet</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="footer__mail">
                <h5 className="footer__mail-titel">Join our weekly digest</h5>
                <p className="footer__text-titel">Get exclusive promotions & updates straight to your inbox.</p>
                <form className="form" action="URL">
                    <input  className="form__input" onChange={e=> setEmail(e.target.value)} value={email} type="email" placeholder="Enter your email here"/>
                    <button className="form__button" onClick={(e) =>handlkesend(e) } type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        <div className="footer__copyright">
            Ⓒ NFT Market. Use this template freely.
        </div>
    </div>
</footer>
  )
}

export default Footer;
