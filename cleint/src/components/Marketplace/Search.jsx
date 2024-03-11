import debounce from 'debounce';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../App';
import { Context } from '../..';

const Search = () => {
  const [value, setValue] = useState('');
  const { setSearchValue } = useContext(SearchContext);
  const { store } = useContext(Context);

  const updateSearchValue = useCallback(
    debounce((str) => {
      store.setSearchValue(str); // Используйте метод setSearchValue
      console.log(store.searchValue);
    }, 1000),
    [store]
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  useEffect(() => {
    console.log(store.searchValue);
  }, [store.searchValue]); // Используйте store.searchValue

  return (
    <form className="market__form" action="URL">
      <input
        className="market__search"
        type="search"
        placeholder="Search your favourite NFTs"
        value={value}
        onChange={onChangeInput}
      />
      <input className="market__image" type="image" src="img/glass.png" alt="Search" />
    </form>
  );
};

export default Search;
