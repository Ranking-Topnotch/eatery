import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import { BsTwitter } from 'react-icons/bs'
import { CiYoutube } from 'react-icons/ci'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import MaskGroup from '../../image/MaskGroup.png'
import MaskGroup1 from '../../image/MaskGroup1.png'
import './footer.css'

const Footer = () => {
  return (
   <div>
      <footer className='footer__container'>
        <section className='section_1'>
            <div className='section__1'>
                <h2><span>St</span>ill You Need Our Support ? </h2>
                <p>Don’t wait make a smart & logical quote here. Its pretty easy.</p>
            </div>

            <div className='section__2'>
                <input type='email' placeholder='Enter Your Email' />
                <button>Subscribe Now</button>
            </div>
        </section>

        <div className='line1'>
            <div className='line'></div>
        </div>

        <section className='footer__con'>
                <div>
                        <h3>About Us.</h3>
                        <p className='p'>
                            Operate clients and leisure travelers has
                            been relying on Groundlink for dependab
                            safe, and professional chauffeured car
                            service in major cities across World.
                        </p>
                        <div>
                            <div className="about_sec"> 
                                <BiTimeFive className='clock'/>
                                <div>
                                    <p>Opening Hour</p>
                                    <p>Mon - Sat(8.00 - 6.00)</p>
                                    <p>Sunday - closed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Useful Links</h3>
                        <ul className='nav_li'>
                            <li>About</li>
                            <li>News</li>
                            <li>Pertners</li>
                            <li>Team</li>
                            <li>Menu</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
            

                <div>
                    <h3>Help?</h3>
                    <ul className='nav_li'>
                        <li>FAQ</li>
                        <li>Terms & condition</li>
                        <li>Reporting</li>
                        <li>Documentation</li>
                        <li>Support</li>
                        <li>Privacy</li>
                    </ul>
                </div>
                <div>
                    <h3>Recent Post</h3>
                    <div className='recentpost'>
                        <img src={MaskGroup}  alt='footer-'/>
                        <div>
                            <p>20 Feb 2022</p>
                            <h4>Keep your Business</h4>
                        </div>
                    </div>
                    <div className='recentpost'>
                        <img src={MaskGroup1} alt='footer-' />
                        <div>
                            <p>20 Feb 2022</p>
                            <h4>Keep your Business</h4>
                        </div>
                    </div>
                    <div className='recentpost'>
                        <img src={MaskGroup}  alt='footer-'/>
                        <div>
                            <p>20 Feb 2022</p>
                            <h4>Keep your Business</h4>
                        </div>
                    </div>
                </div>
               
            </section>
            
        </footer>

        <section className='footer__button'>
            <p> Copyright @ 2023 by Ayeman. All Right Reserved</p>
            <div>
                <FaFacebookF className='social'/>
                <BsTwitter className='social'/>
                <FiInstagram className='social'/>
                <CiYoutube className='social'/>

            </div>
        </section>
   </div>
  )
}

export default Footer