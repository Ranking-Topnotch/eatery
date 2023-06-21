import React from 'react'
import Food3 from '../../image/unsplash_MRHyv-hHxgk.png'
import Food1 from '../../image/unsplash_q54Oxq44MZs.png'
import Food2 from '../../image/unsplash_dphM2U1xq0U-1.png'

import './food.css'

const Food = () => {
  return (
    <div className='food_con'>
        <h3>Food Catergory</h3>
        <h2><span>Ch</span>oose Food Item</h2>
        <div>
            <img src={Food3} alt='Food_Image' />
            <img src={Food1} alt='Food_Image' />
            <img src={Food2} alt='Food_Image' />
            <img src={Food3} alt='Food_Image' />
        </div>
    </div>
  )
}

export default Food