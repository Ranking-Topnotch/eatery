import React from 'react'
import { MdOutlineLunchDining } from 'react-icons/md'
import { GiFullPizza, GiWineGlass } from 'react-icons/gi'
import AboutF1 from '../../image/unsplash_lP5MCM6nZ5A.png'
import AboutF2 from '../../image/unsplash_dphM2U1xq0U.png'
import AboutF3 from '../../image/unsplash_CLMpC9UhyTo.png'
import AboutF4 from '../../image/unsplash_-GFCYhoRe48.png'
import AboutF5 from '../../image/unsplash_tzl1UCXg5Es.png'
import AboutF6 from '../../image/unsplash_mmnKI8kMxpc.png'

import './about1.css'

const About1 = () => {
  return (
    <div className='about1_con'>
        <section className='about1_sec1'>
          <div className='about1_img'>
            <img src={AboutF1} alt='about1-food' />
            <img src={AboutF2} alt='about1-food' />
          </div>

          <div className='about1_img1'>
            <div className='about1_img2'>
              <img src={AboutF3} alt='about1-food' />
              <img src={AboutF4} alt='about1-food' />
            </div>
            <div className='about1_img3'>
              <img src={AboutF5} alt='about1-food' />
              <img src={AboutF6} alt='about1-food' />
            </div>
          </div>
        </section>

        <section className='about1_sec2'>
            <h3>Why Choose us</h3>
            <h2><span>Ex</span>ta ordinary taste And Experienced</h2>
            <p className='about1_details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <div className='about1_time'>
              <div>
                <MdOutlineLunchDining className='about_time'/>
                <h4>Fast Food</h4>
              </div>
              <div>
                <GiFullPizza className='about_time'/>
                <h4>Lunch</h4>
              </div>
              <div>
                <GiWineGlass className='about_time'/>
                <h4>Dinner</h4>
              </div>
            </div>
            <div className='about1_sec3'>
              <span className='about_line'></span>
              <div className='sec3_2'>
                <span>30+</span>
                <div>
                  <p>Years of</p>
                  <h4>Experienced</h4>
                </div>
              </div>
            </div>
        </section>
    </div>
  )
}

export default About1