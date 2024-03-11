import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Hero:FC = () => {
  return (
    <section className="hero">
    <div className="container">
        <div className="heros">
            <div className="heros__content">
                <div className="heros__content-top">
                    <h1 className="heros__titel">Discover digital art & Collect NFTs</h1>
                    <p className="heros__text">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>
                </div>
                <div className="button">
                    <Link to={`/marketplace`} className="button__link button__link--rocket heros__button" >Get Started</Link>
                </div>
                <div className="heros__items">
                    <div className="heros__item">
                        <div className="heros__item-num">240k+ </div>
                        <div className="heros__item-text">Total Sale</div>
                    </div>
                    <div className="heros__item">
                        <div className="heros__item-num">100k+</div>
                        <div className="heros__item-text">Auctions</div>
                    </div>
                    <div className="heros__item">
                        <div className="heros__item-num">240k+</div>
                        <div className="heros__item-text">Artists</div>
                    </div>
                </div>
            </div>
            <a className="heros__link" href="nft.html">
                <div className="heros__image">
                    <img className="heros__img" src="./img/hero/placeholder.jpg" alt="Animaking"/>
                    <div className="info heros__info">
                        <h5 className="info__titel">Space Walking</h5>
                        <div className="info__artist">
                            <img className="info__avatar" src="./img/hero/Avatar.png" alt="Avatar"/>
                            <span className="info__autor">Animakid</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
    </section>
  )
}

export default Hero
