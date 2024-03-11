import React, { FC } from 'react';
interface INavbarCatProps {
    value: number;
    onClickCategory: (index: number) => void;
}
const NftButtons: FC<INavbarCatProps> = ({ value, onClickCategory }) => {
  const categories = ['Today', 'This Week', 'This Month', 'All Time'];

  
  return (
    <div>
      <div className="nft-card__buttons">
        {categories.map((category, i) => (
          <button onClick={() => onClickCategory(i)} className={`nft-card__button rankings__button ${value === i? 'rankings__button__active':'' }`} key={i} data-filter={`.${category}`}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NftButtons;
