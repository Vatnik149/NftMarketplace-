import React, { FC } from 'react'


interface INavbarMarketProps {
  value: number;
  onClickCategory: (index: number) => void;
  sizenft:number;
  sizecollection:number;
}


const Navbar:FC<INavbarMarketProps> = ({ value, onClickCategory,sizenft, sizecollection  }) => {
  const categories = ['NFT', 'Collection'];
  return (
    <div className="nft-card__buttons market__buttons">
      {categories.map((category, i) => (
            <button onClick={() => onClickCategory(i)} key={i} className={`nft-card__button market__button ${value === i? 'market__button__active':'' }`} data-filter=".created">{category}<span className="nft-card__number">{i===0? sizenft : sizecollection}</span></button>
      ))}
    </div>
  )
}

export default Navbar
