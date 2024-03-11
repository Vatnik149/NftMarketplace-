import React, { FC } from 'react'
import { Link } from 'react-router-dom';
export interface INFTCard{
    id:number;
    name:string;
    image:string;
    username:string;
    price:number;
    high:number;

}
const NftCard:FC<INFTCard> = ({id, name, image, username, price, high}) => {
  return (
        <Link  className="link" to={`/nft/${id}`}>
                                    <div className="discover__card nft-card__card">
                                        <div className="discover__icon">
                                            <img className="discover__img" src={`../${image}`} alt="Galaxy"/>
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
                                                <p className="discover__coin">{high} ETH</p>
                                            </div>
                                        </div>
                                    </div>
        </Link>
  )
}

export default NftCard
