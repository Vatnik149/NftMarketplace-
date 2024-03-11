import React, { FC, useEffect, useState } from 'react'
import { ICreatorSales } from '../../models/ICreatorSales';
import CreatorService from '../../service/CreatorService';
import HomeArtistCard from '../Artist/HomeArtistCard';
import { Link } from 'react-router-dom';

// ... (imports and other code)

const Artists: FC = () => {
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
  
    useEffect(() => {
      fetchTopCreators();
    }, []); // Run once on component mount
  
    return (
      <section className="artists">
        <div className="container">
          <div className="artist">
            <div className="inner">
              <div className="titel">
                <h3 className="titel__top">Top creators</h3>
                <p className="titel__text">Checkout Top Rated Creators on the NFT Marketplace</p>
              </div>
              <div className="button">
                <Link className="button__link button__link--rockets" to={`/rankings`}>View Rankings</Link>
              </div>
            </div>
            <div className="artist__content">
              {
                topcreators.slice(0, 13).map((creator: ICreatorSales, index: number) => (
                  <div key={creator.iduser}>
                    <HomeArtistCard id={creator.iduser} index={index+1} image={creator.avatar} name={creator.username} sales={creator.salesnumber} />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Artists;
  
