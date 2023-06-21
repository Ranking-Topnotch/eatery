import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillPlayCircle } from 'react-icons/ai'
import './banner1.css'

const Banner1 = () => {
  return (
    <div className='banner1_con'>
      <div className='banner1'>
          <h3>Restaurant Active Process</h3>
          <div className='ban'>
            <h2><span>We</span> Document Every Food Bean Process untile it is saved</h2>
          </div>
          <div className='ban1'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
            </p>
          </div>
          <div className='ban2'>
            <Link className='ban_button'>Read More</Link>
            <AiFillPlayCircle className='ban_play'/>
            <p>Play video</p>
          </div>
      </div>
    </div>
  )
}

export default Banner1