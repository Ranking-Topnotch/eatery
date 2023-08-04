import React from 'react'
import { AiFillPlayCircle, AiOutlineCoffee } from 'react-icons/ai' 
import { MdOutlinePersonalInjury } from 'react-icons/md'
import { FaUserGraduate } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { CiYoutube } from 'react-icons/ci'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import Image from '../../image/unsplash_lP5MCM6nZ5A (2).png'
import Image1 from '../../image/unsplash_CLMpC9UhyTo (2).png'
import Image2 from '../../image/unsplash_ZuIDLSz3XLg.png'
import Image3 from '../../image/unsplash_3iexvMShGfQ.png'
import Image4 from '../../image/unsplash_v3OlBE6-fhU.png'
import Testimonial from '../testimonial/Testimonial'


import './mainAbout.css'

const MainAbout = () => {
  return (
    <div className='mainabout'>
      <section className='mainabout_top'>
        <div className='about_img'>
          <img className='img' src={Image} alt='aboutImage' />
          <div>
            <img src={Image1} alt='aboutImage' />
            <img src={Image2} alt='aboutImage' />
          </div>
        </div>

        <div className='about__us'>
          <h3>About us ______</h3>
          <h2>Food is an important part of a balanced Diet</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          <div>
            <h4>Show more</h4>
            <AiFillPlayCircle className='ban_play'/>
            <h4>Watch video</h4>
          </div>
        </div>
      </section>

      <section className='about_middle'>
        <h3>Why Choose us</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. </p>
        <img src={Image3} alt='mainabout' />
      </section>

      <section className="about_third">
        <div>
          <MdOutlinePersonalInjury className='about_png' />
          <h3>Best Chef</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
        </div>

        <div>
          <AiOutlineCoffee className='about_png' />
          <h3>120 Item food</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
        </div>

        <div>
          <FaUserGraduate className='about_png' />
          <h3>Clean Environment</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </p>
        </div>
      </section>

      <section className='about_fourth'>
        <div className='about_fourth-sub'>
          <h2>Team Member</h2>
          <p className='about_fourth-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Varius sed pharetra dictum neque massa congue</p>
          <div className='platcard_con'>
            <div className='platcard'>
              <img src={Image4} alt='aboutImg' />
              <h3>Mark Henry</h3>
              <p>Owner</p>
              <div className='mainabout_icon'>
                <FaFacebookF className='about_icon' />
                <BsTwitter className='about_icon'/>
                <CiYoutube className='about_icon'/>
                <FiInstagram className='about_icon'/>
              </div>
            </div>

            <div className='platcard'>
              <img src={Image4} alt='aboutImg' />
              <h3>Ramsey Nwankwo</h3>
              <p>Chef</p>
              <div className='mainabout_icon'>
                <FaFacebookF className='about_icon' />
                <BsTwitter className='about_icon'/>
                <CiYoutube className='about_icon'/>
                <FiInstagram className='about_icon'/>
              </div>
            </div>

            <div className='platcard'>
              <img src={Image4} alt='aboutImg' />
              <h3>Luke Emmanuel</h3>
              <p>Web Developer</p>
              <div className='mainabout_icon'>
                <FaFacebookF className='about_icon' />
                <BsTwitter className='about_icon'/>
                <CiYoutube className='about_icon'/>
                <FiInstagram className='about_icon'/>
              </div>
            </div>

            <div className='platcard'>
              <img src={Image4} alt='aboutImg' />
              <h3>Mark Henry</h3>
              <p>Owner</p>
              <div className='mainabout_icon'>
                <FaFacebookF className='about_icon' />
                <BsTwitter className='about_icon'/>
                <CiYoutube className='about_icon'/>
                <FiInstagram className='about_icon'/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='about_test'>
        <Testimonial />
      </div>

      <section className='menu_list-food'>
        <div className='menu_list-header'>
          <h2>Our Food Menu</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa congue</p>
          <ul className='menu_time'>
            <li>BreakFast</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Dessert</li>
            <li>Drink</li>
            <li>Snack</li>
          </ul>
        </div>

        <div className='menu_list'>
          <div className='first_con'>
            <div className='menu_main'>
              <div>
                <h3>Caffè macchiato</h3>
                <p>Toasted French bread topped with romano, checkbar</p>
                <p>500Cal</p>
              </div>
              <span>32$</span>
            </div>

            <div className='menu_main'>
              <div>
                <h3>Caffe Latte Campuri</h3>
                <p>Toasted French bread topped with romano, checkbar</p>
                <p>700Cal</p>
              </div>
              <span>43$</span>
            </div>

            <div className='menu_main'>
              <div>
                <h3>Tormentoso Bush Pizza Pintoage</h3>
                <p>Toasted French bread topped with romano, checkbar</p>
                <p>1000Cal</p>
              </div>
              <span>14$</span>
            </div>

            <div className='menu_main'>
              <div>
                <h3>Spicy Vegan Potato Curry</h3>
                <p>Spreadable cream cheese, crumbled blue cheese</p>
                <p>1000Cal</p>
              </div>
              <span>14$</span>
            </div>
          </div>

          <div>
          <div className='menu_main'>
              <div>
                <h3>Fig and lemon cake</h3>
                <p>Toasted French bread topped with romano, checkbar</p>
                <p>500Cal</p>
              </div>
              <span>32$</span>
            </div>

            <div className='menu_main'>
              <div>
                <h3>Creamy mascarpone cake</h3>
                <p>Toasted French bread topped with romano, checkbar</p>
                <p>700Cal</p>
              </div>
              <span>43$</span>
            </div>

            <div className='menu_main'>
              <div>
                <h3>Pastry, blueberries, lemon juice</h3>
                <p>Ground cumin, avocados, peeled and cubed</p>
                <p>1000Cal</p>
              </div>
              <span>14$</span>
            </div>

            <div className='menu_main'>
              <div>
                <h3>Spicy Vegan Potato Curry</h3>
                <p>Spreadable cream cheese, crumbled blue cheese</p>
                <p>1000Cal</p>
              </div>
              <span>14$</span>
            </div>
          </div>
        </div>
        
      </section>

      <div>View More</div>
    </div>
  )
}

export default MainAbout