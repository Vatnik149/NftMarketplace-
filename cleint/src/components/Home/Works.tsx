import React, { FC } from 'react'

const Works:FC = () => {
  return (
    <section className="works">
                <div className="container">
                    <div className="work">
                        <div className="titel">
                            <h3 className="titel__top">How it works</h3>
                            <p className="titel__text">Find out how to get started</p>
                        </div>
                        <div className="work__content">
                            <div className="work__card">
                                <div className="work__icon">
                                    <img className="work__img" src="./img/works/wallet.png" alt="Image"/>
                                </div>
                                <div className="work__info">
                                    <h5 className="work__titel">Setup Your Wallet</h5>
                                    <p className="work__text">Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
                                </div>
                            </div>
                            <div className="work__card">
                                <div className="work__icon">
                                    <img className="work__img" src="./img/works/create.png" alt="Image"/>
                                </div>
                                <div className="work__info">
                                    <h5 className="work__titel">Create Collection</h5>
                                    <p className="work__text">Upload your work and setup your collection. Add a description, social links and floor price.</p>
                                </div>
                            </div>
                            <div className="work__card">
                                <div className="work__icon">
                                    <img className="work__img" src="./img/works/start.png" alt="Image"/>
                                </div>
                                <div className="work__info">
                                    <h5 className="work__titel">Start Earning</h5>
                                    <p className="work__text">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Works
