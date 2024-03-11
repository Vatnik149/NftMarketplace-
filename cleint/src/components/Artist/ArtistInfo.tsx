import React, { FC, useContext, useEffect, useState } from 'react'
import store from '../../store';
import { Context } from '../..';
import UserService from '../../service/UserService';


export interface IArtistBio{
    iduser?: number;
    username?: string;
    token?: string;
    bio?: string;
    site?: string;
    youtube?: string;
    discord?: string;
    instagram?: string;
    facebook?: string;
    twitter?: string;

}
const ArtistInfo:FC<IArtistBio> = ({iduser, username, token, bio, site, youtube, discord, instagram, facebook, twitter}) => {
    const [follow, setFollow] = useState<boolean>(false);
    const { store } = useContext(Context);

    async function checkFollow() {
        try {
            if (store.user.iduser === null) {
                console.log(`Войдите в аккаунт`);
            } else {
                const response = await UserService.getFollowUser(store.user.iduser, iduser || 0);
                if (response.data !== undefined && response.data.iduser !== undefined) {
                    setFollow(true);
                    console.log("пользователь найден")
                } else {
                    setFollow(false);
                    console.log("пользователь ненайден")
                    console.log(store.user.iduser)
                }
            }
        } catch (error) {
            console.error("Ошибка при проверке подписки:", error);
        }
    }

    async function followToUser() {
        if (store.user.iduser === undefined) {
            alert("Sign up please");
        }
        else{
            const response = await UserService.followUser(store.user.iduser, iduser|| 0);
            setFollow(true)
        }
    }

    async function unfollowToUser() {
        const response = await UserService.deleteFollowUser(store.user.iduser, iduser || 0);
        setFollow(false);
    }

    useEffect(() => {
        checkFollow();
    }, []);
  return (
    <section className="artist-info">
    <div className="container">
        <div className="artist-info__content">
            <div className="artist-info__titel">
                <h2 className="artist-info__name">{username}</h2>
                <div className="artist-info__buttons">
                    <button className="artist-info__copy">{token}</button>
                    {(store.user.iduser === iduser) ? null : (
                            follow ? (
                                <button className="artist-info__minus" onClick={unfollowToUser}>Unfollow</button>
                            ) : (
                                <button className="artist-info__plus" onClick={followToUser}>Follow</button>
                            )
                        )}
                    
                </div>
            </div>
            <div className="artist-info__info">
                <div className="artist-info__stats">
                    <div className="artist-info__stat">
                        <h4 className="artist-info__total">250k+</h4>
                        <p className="artist-info__naming">Volume</p>
                    </div>
                    <div className="artist-info__stat">
                        <h4 className="artist-info__total">50+</h4>
                        <p className="artist-info__naming">NFTs Sold</p>
                    </div>
                    <div className="artist-info__stat">
                        <h4 className="artist-info__total">3000+</h4>
                        <p className="artist-info__naming">Followers</p>
                    </div>
                </div>
                <div className="artist-info__bio">
                    <h5 className="artist-info__subtitel">Bio</h5>
                    <p className="artist-info__bio-text">{bio}</p>
                </div>
                <div className="artist-info__web">
                    <h5 className="artist-info__subtitel">Links</h5>
                    <div className="artist-info__web-link">
                        <a className="artist-info__link" href={`${site}`}>
                            <img className="artist-info__social" src="../img/artist/social/globe.svg" alt="internet"/>
                        </a>
                        <a className="artist-info__link" href={`${discord}`}>
                            <img className="artist-info__social" src="../img/artist/social/discord.svg" alt="Discord"/>
                        </a>
                        <a className="artist-info__link" href={`${youtube}`}>
                            <img className="artist-info__social" src="../img/artist/social/youtube.svg" alt="YouTube"/>
                        </a>
                        <a className="artist-info__link" href={`${twitter}`}>
                            <img className="artist-info__social" src="../img/artist/social/twitter.svg" alt="Twitter"/>
                        </a>
                        <a className="artist-info__link" href={`${instagram}`}>
                            <img className="artist-info__social" src="../img/artist/social/instagram.svg" alt="Instagram"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default ArtistInfo
