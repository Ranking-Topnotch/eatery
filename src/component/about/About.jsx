import React from 'react'
import { Link } from 'react-router-dom'
import { GiCheckMark } from 'react-icons/gi'
import Unsplash from '../../image/unsplash_fdlZBWIP0aM.png'
import Unsplash1 from '../../image/unsplash_jpkfc5_d-DI.png'
import Unsplash2 from '../../image/unsplash_mAQZ3X_8_l0.png'

import './about.css'


const About = () => {
  return (
    <div className='about__con'>
        <section className='about_sec1'>
            <h3>about us</h3>
            <h2><span>We</span> Create the best foody product</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <div className='about_p pp'>
                <span><GiCheckMark /></span>
                <p> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            </div>
            <div className='about_p'> 
                <span><GiCheckMark /></span>
                <p>  Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
            </div>
            <div className='about_p'>
                <span><GiCheckMark /></span>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <Link className='about_button'>Read More</Link>

        </section>

        <section className='about_sec2'>
            <img src={Unsplash} alt='cook' />

            <div className='about_im'>
                <img src={Unsplash1} alt='cook1' className='about_img'/>
                <img src={Unsplash2} alt='cook2' />
            </div>
        </section>
    </div>
  )
}

export default About