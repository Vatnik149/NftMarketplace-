import React, { FC, useState } from 'react'
import MailService from '../../service/MailService';

const Subscribe:FC = () => {

    const [email, setEmail] = useState<string>('')
    const handlkesend = (e:any) => {
        e.preventDefault(); 
        MailService.sendMessage(email);
      };
  return (
        <section className="subscribe">
                    <div className="container">
                        <div className="widget">
                            <div className="widget__icon">
                                <img className="widget__img" src="./img/widget.jpg" alt="Image"/>
                            </div>
                            <div className="titel widget__titel">
                                <h3 className="titel__top">Join our weekly digest</h3>
                                <p className="titel__text">Get exclusive promotions & updates straight to your inbox.</p>
                                <form className="form" action="URL">
                                    <input  className="form__input" onChange={e=> setEmail(e.target.value)} value={email} type="email" placeholder="Enter your email here"/>
                                    <button className="form__button" onClick={(e) =>handlkesend(e) } type="submit">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
        </section>
  )
}

export default Subscribe
