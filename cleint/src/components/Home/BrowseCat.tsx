import React, { FC } from 'react'

const BrowseCat:FC = () => {
  return (
    <section className="browse-categories">
                <div className="container">
                    <div className="browse">
                        <div className="inner">
                            <div className="titel">
                                <h3 className="titel__top">Browse Categories</h3>
                            </div>
                        </div>
                        <div className="browse__content">
                            <a className="link" href="#">
                                <div className="browse__card">
                                    <div className="browse__icon browse__icon--art">
                                        <img className="browse__img" src="./img/browse/art.jpg" alt="Art"/>
                                    </div>
                                    <div className="browse__name">
                                        <p className="browse__text">Art</p>
                                    </div>
                                </div>
                            </a>
                            <a className="link" href="#">
                                <div className="browse__card">
                                    <div className="browse__icon browse__icon--collectibles">
                                        <img className="browse__img" src="./img/browse/collectibles.jpg" alt="Collectibles"/>
                                    </div>
                                    <div className="browse__name">
                                        <p className="browse__text">Collectibles</p>
                                    </div>
                                </div>
                            </a>
                            <a className="link" href="#">
                                <div className="browse__card">
                                    <div className="browse__icon browse__icon--music">
                                        <img className="browse__img" src="./img/browse/music.jpg" alt="Music"/>
                                    </div>
                                    <div className="browse__name">
                                        <p className="browse__text">Music</p>
                                    </div>
                                </div>
                            </a>
                            <a className="link" href="#">
                                <div className="browse__card">
                                    <div className="browse__icon browse__icon--camera">
                                        <img className="browse__img" src="./img/browse/photography.jpg" alt="Photography"/>
                                    </div>
                                    <div className="browse__name">
                                        <p className="browse__text">Photography</p>
                                    </div>
                                </div>
                            </a>
                            <a className="link" href="#">
                                <div className="browse__card">
                                    <div className="browse__icon browse__icon--video">
                                        <img className="browse__img" src="./img/browse/video.jpg" alt="Video"/>
                                    </div>
                                    <div className="browse__name">
                                        <p className="browse__text">Video</p>
                                    </div>
                                </div>
                            </a>
                            <a className="link" href="#">
                                <div className="browse__card">
                                    <div className="browse__icon browse__icon--utility">
                                        <img className="browse__img" src="./img/browse/utility.jpg" alt="Utility"/>
                                    </div>
                                    <div className="browse__name">
                                        <p className="browse__text">Utility</p>
                                    </div>
                                </div>
                            </a>
                            <a className="link" href="#">
                                <div className="browse__card">
                                    <div className="browse__icon browse__icon--sport">
                                        <img className="browse__img" src="./img/browse/sport.jpg" alt="Sport"/>
                                    </div>
                                    <div className="browse__name">
                                        <p className="browse__text">Sport</p>
                                    </div>
                                </div>
                            </a>
                            <a className="link" href="#">
                                <div className="browse__card">
                                    <div className="browse__icon browse__icon--planet">
                                        <img className="browse__img" src="./img/browse/worlds.jpg" alt="Virtual Worlds"/>
                                    </div>
                                    <div className="browse__name">
                                        <p className="browse__text">Virtual Worlds</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default BrowseCat;
