import React from 'react'
import Image from '../../image/Image.png'
import { Link } from 'react-router-dom'
import { BsTwitter } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF } from 'react-icons/fa'
import './header.css'

const Header = () => {
  return (
    <header>
        <section className='header__1'>
            <div className='head_line'></div>
            <div className='head_media'>
                <FaFacebookF className='head_s'/>
                <BsTwitter className='head_s twi'/>
                <FiInstagram className='head_s'/>
            </div>
            <div className='head_line'></div>

        </section>

        <section className='header__2'>
            <h3>Its Quick & Amusing!</h3>
            <h2><span>Th</span>e Art of speed food Quality</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue</p>
            <Link className='head_button'>See Menu</Link>
        </section>
        <section>
            <img src={Image} alt='head-food' className='header_image'/>
        </section>
    </header>
  )
}

export default Header