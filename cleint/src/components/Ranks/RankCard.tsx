import React, { FC } from 'react'

export interface IRankingsCard{
    index: number;
    image?: string;
    name: string;
    sales: number;
}
const RankCard:FC<IRankingsCard> = ({index,name, image, sales}) => {
  return (
    <div className="rankings__card">
    <div className="rankings__avatar">
        <p className="rankings__number">{index}</p>
        <img className="rankings__img" src={`./img/artists/${image}`} alt="Avatar"/>
        <p className="rankings__name">{name}</p>
    </div>
    <div className="rankings__information">
        <p className="rankings__data rankings__data--green">+1.41%</p>
        <p className="rankings__data">{Math.floor(Math.random() * 101)}</p>
        <p className="rankings__data">{sales} ETH</p>
    </div>
</div>
  )
}

export default RankCard
