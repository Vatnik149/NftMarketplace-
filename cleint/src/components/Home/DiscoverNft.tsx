import React, { FC, useEffect, useState } from 'react'
import { INFTDATA } from '../../models/INftData';
import NftService from '../../service/NftService';
import DiscoverNFT from '../NFT/DiscoverNFT';
import NftCard from '../NFT/NftCard';
import { Link } from 'react-router-dom';

const DiscoverNft:FC = () => {

    const [nfts, setNfts] = useState<INFTDATA[]>([]);

    async function fetchTopCreators() {
        try {
          const response = await NftService.fetchUsers();
          setNfts(response.data);
        } catch (error) {
          // Handle the error here if needed
          console.error(error);
        }
      }
    
      useEffect(() => {
        fetchTopCreators();
      }, []); // Run once on component mount
      
    return (
        <section className="discover-nft">
        <div className="container">
            <div className="discover">
                <div className="inner">
                    <div className="titel">
                        <h3 className="titel__top">Discover More NFTs</h3>
                        <p className="titel__text">Explore new trending NFTs</p>
                    </div>
                    <div className="button">
                        <Link className="button__link button__link--eye" to={`/marketplace`}>See All</Link>
                    </div>
                </div>
                <div className="discover__content">
                    {
                    nfts.slice(0, 3).map((nft: INFTDATA) => (
                    <div key={nft.idnft}>
                         <NftCard id={nft.idnft} name={nft.name} image={nft.image} username={nft.username} price={nft.price} high={nft.highest} />
                    </div>
                    ))
                }
                </div>
            </div>
        </div>
    </section>
    )
}

export default DiscoverNft
