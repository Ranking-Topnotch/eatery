import React from 'react'
import Group from '../../image/Group.png' 
import Group1 from '../../image/Group-1.png' 
import Group2 from '../../image/Group-2.png' 
import Group3 from '../../image/Group-3.png' 
import './banner.css'

const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner_con'>
            <div>
                <img src={Group} alt='banner_image' />
                <p>Professional Chefs</p>
                <h3>420</h3>
            </div>

            <div>
                <img src={Group1} alt='banner_image' />
                <p>Items of Food</p>
                <h3>320</h3>
            </div>

            <div>
                <img src={Group2} alt='banner_image' />
                <p>Years of Experience</p>
                <h3>30+</h3>
            </div>

            <div>
                <img src={Group3} alt='banner_image' />
                <p>Happy Customers</p>
                <h3>220</h3>
            </div>

        </div>
    </div>
  )
}

export default Banner