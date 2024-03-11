import React, { FC, useEffect, useState } from 'react'
import NftButtons from '../components/Ranks/nftButtons'
import { ICreatorSales } from '../models/ICreatorSales';
import CreatorService from '../service/CreatorService';
import RankCard from '../components/Ranks/RankCard';

const Rankings:FC = () => {

    const [categoryId, setCategoryId] = useState<number>(0);
    const [topcreators, setCreators] = useState<ICreatorSales[]>([]);

      async function fetchTopCreators() {
        try {
          const response = await CreatorService.topCreators();
          setCreators(response.data);
        } catch (error) {
          // Handle the error here if needed
          console.error(error);
        }
      }
      async function fetchTopCreatorsWeek() {
        try {
          const response = await CreatorService.topCreatorsWeek();
          setCreators(response.data);
        } catch (error) {
          // Handle the error here if needed
          console.error(error);
        }
      }
      async function fetchTopCreatorsToday() {
        try {
          const response = await CreatorService.topCreatorsToday();
          setCreators(response.data);
        } catch (error) {
          // Handle the error here if needed
          console.error(error);
        }
      }
      async function fetchTopCreatorsMonth() {
        try {
          const response = await CreatorService.topCreatorsMonth();
          setCreators(response.data);
        } catch (error) {
          // Handle the error here if needed
          console.error(error);
        }
      }

        async function ChangeCategory(i: number) {
            console.log(i);
            setCategoryId(i);

            if(i === 0) {
                fetchTopCreatorsToday();
            }
            if(i === 1) {
                fetchTopCreatorsWeek();
            }
            if(i === 2) {
                fetchTopCreatorsMonth();
            }
            if(i === 3) {
                fetchTopCreators();
            }
        }

    useEffect(() => {
        setCategoryId(0);
        fetchTopCreatorsToday();
    },[])
    
    
  return (
    <section className="rankings">
    <div className="container">
        <div className="rankings__inner">
            <h2 className="rankings__titel">Top Creators</h2>
            <p className="rankings__subtitel">Check out top ranking NFT artists on the NFT Marketplace.</p>
            <NftButtons value={categoryId} onClickCategory={(i) =>  ChangeCategory(i)}/>
            <div className="rankings__info">
                <div className="rankings__artist">
                    <p className="rankings__text">#</p>
                    <p className="rankings__text">Artist</p>
                </div>
                <div className="rankings__inform">
                    <p className="rankings__text">Change</p>
                    <p className="rankings__text">NFTs Sold</p>
                    <p className="rankings__text">Volume</p>
                </div>
            </div>
            <div className="nft-card__content rankings__content">
                <div className="rankings__cards mix created">
                    {
                    topcreators.slice(0, 12).map((creator: ICreatorSales, index: number) => (
                    <div key={creator.iduser}>
                        <RankCard index={index+1} image={creator.avatar} name={creator.username}  sales={creator.salesnumber}/>
                    </div>
                    ))
                }
                </div>
   
            </div>
        </div>
    </div>
    </section>
  )
}

export default Rankings
