import React from 'react'
import Testimonial1 from '../../image/Ellipse 6.png'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import './testimonial.css'

const Testimonial = () => {
  return (
    <div className='test_con'>
        <h3 className='test_head'>Testimonial</h3>
        <h2><span>Wh</span>at our client are saying</h2>
        <div className='test'>
            <div className='test_body'>
                <img src={Testimonial1} alt='testimonial' />
                <section>
                    <BsFillMoonStarsFill className='test_colum'/>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </p>
                    <div>
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />

                    </div>
                    <h3>Solomon Adeodu</h3>
                    <p>Customer</p>
                </section>
                <div className='test_circle_con'>
                    <div className='test_circle'></div>
                    <div className='test_circle'></div>
                    <div className='test_circle'></div>
                    <div className='test_circle'></div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Testimonial