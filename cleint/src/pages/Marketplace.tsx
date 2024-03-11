import React, { FC, useContext, useEffect, useState } from 'react'
import Navbar from '../components/Marketplace/Navbar'
import NftCard from '../components/NFT/NftCard';
import { INFTDATA } from '../models/INftData';
import NftService from '../service/NftService';
import CollectionService from '../service/CollectionService';
import { ICollection } from '../models/ICollection';
import CollectionCard from '../components/Collection/CollectionCard';
import Search from '../components/Marketplace/Search';
import { SearchContext } from '../App';
import { Context } from '../';
import { observer } from 'mobx-react-lite';

const Marketplace:FC = () => {
    const [categoryId, setCategoryId] = useState<number>(0);
    const [nfts, setNfts] = useState<INFTDATA[]>([]);
    const [collection, setCollection] = useState<ICollection[]>([]);
    const { store } = useContext(Context);
    

    async function fetchNews() {
        try {
          const response = await NftService.getByNameNft(store.searchValue);
          setNfts(response.data);
          console.log(store.searchValue);
        } catch (error) {
          // Handle the error here if needed
          console.error(error);
        }
      }
      async function fetchCollection() {
        try {
          const response = await CollectionService.getByNameCollection(store.searchValue);
          setCollection(response.data);
          console.log(store.searchValue);
        } catch (error) {
          // Handle the error here if needed
          console.error(error);
        }
      }
      useEffect(() => {
        fetchNews();
        fetchCollection();
      }, [store.searchValue]); // Используйте store.searchValue напрямую здесь
      
      useEffect(() => {
        console.log(store.searchValue);
      }, [store.searchValue]); // Используйте store.searchValue напрямую здесь
      
  return (
    <section className="market">
                <div className="container">
                    <div className="market__inner">
                        <h2 className="market__titel">Browse Marketplace</h2>
                        <p className="market__subtitel">Browse through more than 50k NFTs on the NFT Marketplace.</p>
                        <Search/>
                        <div className="nft-card__inner">
                           <Navbar value={categoryId} sizenft={nfts.length} sizecollection={collection.length} onClickCategory={(i)=> setCategoryId(i)}/>
                            <div className="nft-card__content">
                            <div className="nft-card__cards mix created">
                                {
                                    categoryId === 0 ?(
                                        nfts.map((nft: INFTDATA) => (
                                            <NftCard key={nft.idnft} id={nft.idnft} name={nft.name} image={nft.image} username={nft.username} price={nft.price} high={nft.highest}/>
                                        ))
                                    ) : (
                                        collection.map((collection: ICollection) => (
                                            <CollectionCard key={collection.idcollection} id={collection.idcollection} name={collection.name} image={collection.image} username={collection.username} price={collection.price} high={collection.highest}/>
                                        ))
                                    )
                                }
                                
                            </div>
                        
                        </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default observer(Marketplace);
