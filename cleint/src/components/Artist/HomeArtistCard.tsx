import React, { FC } from 'react';
import { Link } from 'react-router-dom';


export interface IHomeArtistCard{
    id:number;
    index: number;
    image?: string;
    name: string;
    sales: number;
}
const HomeArtistCard: FC<IHomeArtistCard> = ({id,index, image, name, sales}) => {
  return (
    <Link  className="link" to={`/artist/${id}`}>
      <div className="artist__card">
        <div className="artist__card-top">
          <div className="artist__number">{index}</div>
          <div className="artist__avatar">
            <img className="artist__img" src={`./img/artists/${image}`} alt="Avatar" />
          </div>
        </div>
        <div className="artist__info">
          <h5 className="artist__studio">{name}</h5>
          <p className="artist__total">
            Total Sales: <span className="artist__price">{sales}.432  ETH</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomeArtistCard;
