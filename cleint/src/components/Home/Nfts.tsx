import React, { FC, useEffect, useState } from 'react'

const Nfts:FC<{ endTime: number }> = ({ endTime }) => {

    const calculateTimeLeft = () => {
        const now = new Date().getTime();
        const difference = endTime - now;
    
        if (difference <= 0) {
          return { hours: 0, minutes: 0, seconds: 0 };
        }
    
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
        return { hours, minutes, seconds };
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
      useEffect(() => {
        const timerInterval = setInterval(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
    
        return () => {
          clearInterval(timerInterval);
        };
      }, [endTime]);
      
  return (
    <section className="nfts">
                <div className="container">
                    <div className="nft">
                        <div className="nft__info">
                            <a className="link" href="artist.html">
                                <div className="info__artist nft__artist">
                                    <img className="info__avatar" src="./img/collection/avatar2.jpg" alt="Avatar"/>
                                    <span className="info__autor">Shroomie</span>
                                </div>
                            </a>
                            <h2 className="nft__titel">Magic Mashrooms</h2>
                            <div className="button">
                                <a className="button__link button__link--eye nft__button" href="nft.html">See NFT</a>
                            </div>
                        </div>
                        <div className="nft__timer">
                            <p className="nft__text">Auction ends in:</p>
                            <div className="timer__items">
                                <div className="timer__item timer__hours">{String(timeLeft.hours).padStart(2, '0')}</div>
                                <div className="timer__item timer__minutes">{String(timeLeft.minutes).padStart(2, '0')}</div>
                                <div className="timer__item timer__seconds">{String(timeLeft.seconds).padStart(2, '0')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Nfts
