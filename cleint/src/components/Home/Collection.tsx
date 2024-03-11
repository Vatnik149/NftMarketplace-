import React, { FC } from 'react'

const Collection:FC = () => {
  return (
    <section className="collection">
    <div className="container">
        <div className="trend">
            <div className="titel">
                <h3 className="titel__top">Trending Collection</h3>
                <p className="titel__text">Checkout our weekly updated trending collection.</p>
            </div>
            <div className="trend__item">
                <div className="trend__card">
                    <div className="trend__card-foto">
                        <div className="trend__link" >
                            <img className="trend__img" src="../img/collection/primary.jpg" alt="NFT"/>
                        </div>
                        <div className="trend__link" >
                            <img className="trend__img" src="./img/collection/secondary1.jpg" alt="NFT"/>
                        </div>
                        <div className="trend__link" >
                            <img className="trend__img" src="./img/collection/secondary2.jpg" alt="NFT"/>
                        </div>
                        <div className="trend__link">1025+</div>
                    </div>
                    <div className="info">
                        <h5 className="info__titel">DSGN Animals</h5>
                        <div  className="link">
                            <div className="info__artist">
                                <img className="info__avatar" src="./img/collection/avatar1.jpg" alt="Avatar"/>
                                <span className="info__autor">Juanie</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trend__card trend__card--none">
                    <div className="trend__card-foto">
                        <div className="trend__link" >
                            <img className="trend__img" src="./img/collection/primary2.jpg" alt="NFT"/>
                        </div>
                        <div className="trend__link" >
                            <img className="trend__img" src="./img/collection/secondary3.jpg" alt="NFT"/>
                        </div>
                        <div className="trend__link" >
                            <img className="trend__img" src="./img/collection/secondary4.jpg" alt="NFT"/>
                        </div>
                        <div className="trend__link" >1025+</div>
                    </div>
                    <div className="info">
                        <h5 className="info__titel">Magic Mushrooms</h5>
                        <div  className="link">
                            <div className="info__artist">
                                <img className="info__avatar" src="./img/collection/avatar2.jpg" alt="Avatar"/>
                                <span className="info__autor">Blue Whale</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trend__card">
                    <div className="trend__card-foto">
                        <div className="trend__link" >
                            <img className="trend__img" src="./img/collection/primary3.jpg" alt="NFT"/>
                        </div>
                        <div className="trend__link" >
                            <img className="trend__img" src="./img/collection/secondary5.jpg" alt="NFT"/>
                        </div>
                        <div className="trend__link" >
                            <img className="trend__img" src="./img/collection/secondary6.jpg" alt="NFT"/>
                        </div>
                        <div className="trend__link">1025+</div>
                    </div>
                    <div className="info">
                        <h5 className="info__titel">Disco Machines</h5>
                        <div  className="link">
                            <div className="info__artist">
                                <img className="info__avatar" src="./img/collection/avatar3.jpg" alt="Avatar"/>
                                <span className="info__autor">BeKind2Robots</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Collection
