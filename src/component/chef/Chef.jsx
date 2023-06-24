import React from 'react'
import Chef1 from '../../image/Rectangle 8863.png'
import Chef2 from '../../image/Rectangle 8863-1.png'
import Chef3 from '../../image/Rectangle 8863-2.png'
import Chef4 from '../../image/Rectangle 8863-3.png'
import './chef.css'

const chefData = [
    {
        img: Chef1,
        name: 'Ramsey',
        position: 'Cheif Chef'
    },
    {
        img: Chef2,
        name: 'Korede',
        position: 'Cheif Cheif'  
    }, 
    {
        img: Chef3,
        name: 'Emmanuel',
        position: 'Cheif Cheif'
    },
    {
        img: Chef4,
        name: 'Luke',
        position: 'Cheif Cheif'
    }
]
const Chef = () => {
    const chefs = chefData.map(chef => {
        return <div className='chef_m'>
            <img src={chef.img} alt="Chef preparing a meal"/>
            <section className='chef_sec'>
                <h3>{chef.name}</h3>
                <p>{chef.position}</p>
            </section>
        </div>
    })
  return (
    <div className='chef_con'>
        <h3 className='chef_head'>Chef</h3>
        <h2><span>Me</span>et Our Chef</h2>
        <div className='chef_main'>
            {chefs}
        </div>
    </div>
  )
}

export default Chef