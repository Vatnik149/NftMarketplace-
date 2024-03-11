import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { INFTDATA } from '../models/INftData';
import NftService from '../service/NftService';
import NftCard from '../components/NFT/NftCard';

const Nft: FC = () => {
  const { id } = useParams<string>();
  const [nft, setNft] = useState<INFTDATA | null>(null);
  const [nfts, setUsernft] = useState<INFTDATA[]>([]);



  async function getOneNft() {
    try {
      const response = await NftService.getOneNft(`${id}`);
      const singleNft = response.data[0]
      setNft(singleNft);
    } catch (error) {
      console.error(error);
    }
  }
  async function fetchUserNfts() {
    try {
      const response = await NftService.getUserNfts(`${nft?.iduser}`);
      setUsernft(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  const renderNftCards = () => {
   
      return nfts.map((nft: INFTDATA) => (
        <NftCard key={nft.idnft} id={nft.idnft} name={nft.name} image={nft.image} username={nft.username} price={nft.price} high={nft.highest} />
      ));
  };


useEffect(() => {
  getOneNft()
  fetchUserNfts()
}, []);


  return (
    
    <>
        <section className="nft-page">
                <div className="nft-page__placeholder">
                    <img className="nft-page__img" src="/img/nft/bg.jpg" alt="NFT"/>
                </div>
                <div className="container">
                    <div className="nft-page__inner">
                        <div className="nft-page__info">
                            <div className="nft-page__info-titel">
                                <h2 className="nft-page__titel">{nft?.name}</h2>
                                <p className="nft-page__subtitel">Minted on Sep 30, 2022</p>
                            </div>
                            <div className="nft__timer">
                                <p className="nft__text">Auction ends in:</p>
                                <div className="timer__items">
                                    <div className="timer__item timer__hours">00</div>
                                    <div className="timer__item timer__minutes">00</div>
                                    <div className="timer__item timer__seconds">00</div>
                                </div>
                                <button className="nft-page__bid">Place Bid</button>
                            </div>
                        </div>
                        <div className="nft-page__created">
                            <h5 className="nft-page__titel-top">Created By</h5>
                            <a href="artist.html" className="link">
                                <div className="info__artist">
                                    <img className="info__avatar" src="/img/nft/avatar.jpg" alt="Avatar"/>
                                    <span className="info__autor nft-page__autor">{nft?.username}</span>
                                </div>
                            </a>
                        </div>
                        <div className="nft-page__information">
                            <h5 className="nft-page__titel-top">Description</h5>
                            <p className="nft-page__information-text">
                                {nft?.description}
                            </p>
                            
                        </div>
                        <div className="nft-page__detail">
                            <h5 className="nft-page__titel-top">Details</h5>
                            <a href={`${nft?.ethername}`} className="link">
                                <div className="nft-page__item">
                                    <img className="nft-page__item-img" src="/img/nft/globe.svg" alt="Global"/>
                                    <p className="nft-page__item-text">View on Etherscan</p>
                                </div>
                            </a>
                            <a href={`${nft?.ethername}`} className="link">
                                <div className="nft-page__item">
                                    <img className="nft-page__item-img" src="/img/nft/globe.svg" alt="Global"/>
                                    <p className="nft-page__item-text">View Original</p>
                                </div>
                            </a>
                        </div>
                        <div className="nft-page__tag">
                            <h5 className="nft-page__titel-top nft-page__titel-top--margin">Tags</h5>
                            <a className="nft-page__link" href="#">Animation</a>
                            <a className="nft-page__link" href="#">illustration</a>
                        </div>
                    </div>
                </div>
            </section>
        {renderNftCards}
        
            
    </>
  )
}

export default Nft
