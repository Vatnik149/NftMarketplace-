import React, { FC } from 'react';

interface INavbarMarketProps {
  value: number;
  onClickCategory: (index: number) => void;
  sizecreated: number;
  sizecollection: number;
  sizeOwned: number;
}

const NavbarArtist: FC<INavbarMarketProps> = ({ value, onClickCategory, sizecreated, sizecollection, sizeOwned }) => {
  const categories = ['Created', 'Owned', 'Collection'];

  return (
    <div className="nft-card__buttons">
      {categories.map((category, i) => (
       <button
       onClick={() => onClickCategory(i)} // onClick event handler with a function onClickCategory(i)
       key={i} // Unique key for React rendering
       className={`nft-card__button artist__button ${value === i ? 'nft-card__button__active' : ''}`} // Dynamic class based on condition
       style={value === i ? { borderBottom: "1px solid white", color:"white" } : {}} // Inline style based on condition
       data-filter={`.${category.toLowerCase()}`} // Data attribute for filtering, using the category in lowercase
     >
       {category} <span>{i === 0 ? sizecreated : i === 1 ? sizeOwned : sizecollection}</span>
     </button>
      ))}
    </div>
  );
};

export default NavbarArtist;
