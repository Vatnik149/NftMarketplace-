import React, { FC, useContext, useState } from 'react'
import RegistrationForm from '../components/Account/RegistrationForm'
import { Context } from '..';

const Account:FC = () => {
    
    return (
        <section className="account">
                    <div className="account__container">
                        <div className="account__inner">
                            <div className="account__image">
                                <img className="account__img" src="./img/account/placeholder.jpg" alt="Image"/>
                            </div>
                            <div className="account__content">
                                <div className="account__titel">
                                    <h2 className="account__titel-top">Create account</h2>
                                    <p className="account__text">Welcome! enter your details and start creating, collecting and selling NFTs.</p>
                                </div>
                                <RegistrationForm/>
                            </div>
                        </div>
                    </div>
                </section>
    )
}

export default Account
