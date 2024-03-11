import React, { FC } from 'react';

export interface IDiscoverNFTCard {
  name: string;
  userPic: string;
  nftPic: string;
  username: string;
  price: number;
  height: number; // Corrected spelling
}

const DiscoverNFT: FC<IDiscoverNFTCard> = ({ name, userPic,nftPic, username, price, height }) => {
  return (
    <a className="link discover__link" href="nft.html">
      <div className="discover__card">
        <div className="discover__icon">
          <img className="discover__img" src={`../img/discover/${nftPic}.jpg`} alt="Astro" />
        </div>
        <div className="discover__info">
          <div className="info">
            <h5 className="info__titel">{name}</h5>
            <div className="info__artist">
              <img className="info__avatar" src={`./img/discover/Avatars${userPic}.jpg`} alt="Avatar" />
              <span className="info__autor">{username}</span>
            </div>
          </div>
        </div>
        <div className="discover__prises">
          <div className="discover__prise">
            <p className="discover__text">Price</p>
            <p className="discover__coin">{price} ETH</p>
          </div>
          <div className="discover__bid">
            <p className="discover__text">Highest Bid</p>
            <p className="discover__coin">{height} wETH</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default DiscoverNFT;
