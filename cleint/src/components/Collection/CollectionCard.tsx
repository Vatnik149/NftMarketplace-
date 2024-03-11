import React, { FC } from 'react'
export interface ICollectionCard{
    id:number;
    name:string;
    image:string;
    username:string;
    price:number;
    high:number;

}
const CollectionCard:FC<ICollectionCard> = ({id, name, image, username, price, high,}) => {
  return (
        <a className="link" href="nft.html">
                                    <div className="discover__card nft-card__card">
                                        <div className="discover__icon">
                                            <img className="discover__img" src={`${image}`} alt="Galaxy"/>
                                        </div>
                                        <div className="discover__info">
                                            <div className="info">
                                                <h5 className="info__titel">{name}</h5>
                                                <div className="info__artist">
                                                    <img className="info__avatar" src="./img/hero/Avatar.png" alt="Avatar"/>
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
                                                <p className="discover__coin">{high} wETH</p>
                                            </div>
                                        </div>
                                    </div>
        </a>
  )
}

export default CollectionCard
