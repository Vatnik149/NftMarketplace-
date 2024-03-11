import React from 'react'
import Hero from '../components/Home/Hero'
import Collection from '../components/Home/Collection'
import Artists from '../components/Home/Artists'
import BrowseCat from '../components/Home/BrowseCat'
import DiscoverNft from '../components/Home/DiscoverNft'
import Nfts from '../components/Home/Nfts'
import Works from '../components/Home/Works'
import Subscribe from '../components/Home/Subscribe'


const Home = () => {

  const auctionEndTime = new Date('2024-03-28T00:00:00').getTime();
  return (
    <>
        <Hero/>
        <Collection/>
        <Artists/>
        <BrowseCat/>
        <DiscoverNft/>
        <Nfts endTime={auctionEndTime}/>
        <Works/>
        <Subscribe/>
    </>
  )
}

export default Home
