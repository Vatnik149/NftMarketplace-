import React, { FC, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { IUser } from '../models/IUser';
import UserService from '../service/UserService';
import ArtistInfo from '../components/Artist/ArtistInfo';
import NavbarArtist from '../components/Artist/Navbar';
import NftCard, { INFTCard } from '../components/NFT/NftCard';
import { INFTDATA } from '../models/INftData';
import NftService from '../service/NftService';
import { ICollection } from '../models/ICollection';
import CollectionService from '../service/CollectionService';

const Artist: FC = () => {
    const { id } = useParams<string>();
    const [artist, setArtist] = useState<IUser | null>(null);
    const [categoryId, setCategoryId] = useState<number>(0);
    const [nfts, setUsernft] = useState<INFTDATA[]>([]);
    const [collection, setCollection] = useState<ICollection[]>([]);
  
    async function fetchUserNfts() {
      try {
        const response = await NftService.getUserNfts(`${id}`);
        setUsernft(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  
    async function fetchUserCollection() {
      try {
        const response = await CollectionService.getUserCollection(`${id}`);
        setCollection(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  
    async function getOneArtist() {
      try {
        const response = await UserService.getOneUser(`${id}`);
        setArtist(response.data);
      } catch (err) {
        console.error(err);
      }
    }
  
    const renderNftCards = () => {
      if (categoryId === 0) {
        return nfts.map((nft: INFTDATA) => (
          <NftCard key={nft.idnft} id={nft.idnft} name={nft.name} image={nft.image} username={nft.username} price={nft.price} high={nft.highest} />
        ));
      } else if (categoryId === 1) {
        return nfts.map((nft: INFTDATA) => (
          <NftCard key={nft.idnft} id={nft.idnft} name={nft.name} image={nft.image} username={nft.username} price={nft.price} high={nft.highest} />
        ));
      } else if (categoryId === 2) {
        return collection.map((collection: ICollection) => (
          <NftCard key={collection.idcollection} id={collection.idcollection} name={collection.name} image={collection.image} username={collection.username} price={collection.price} high={collection.highest} />
        ));
      }
  
      return null;
    };
  
    useEffect(() => {
      fetchUserCollection();
      fetchUserNfts();
      getOneArtist();
    }, []);
  
    return (
      <>
        <div className="profile">
                <div className="container">
                    <div className="profile__avatar">
                        <img className="profile__img" src={`../img/artists/${artist?.avatar}`}/>
                    </div>
                </div>
            </div>
            (
            <div key={artist?.iduser}>
                <ArtistInfo iduser={artist?.iduser} username={artist?.username} token={artist?.token} bio={artist?.bio} site={artist?.website} youtube={artist?.youtube} discord={artist?.discordLink} facebook={artist?.facebook} twitter={artist?.twitter}/>
            </div>
            )
        <section className="nft-card">
          <div className="container">
            <div className="nft-card__inner">
              <NavbarArtist value={categoryId} onClickCategory={(i) => setCategoryId(i)} sizeOwned={nfts.length} sizecollection={collection.length} sizecreated={nfts.length} />
              <div className="nft-card__content">
              {renderNftCards()}
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Artist;
