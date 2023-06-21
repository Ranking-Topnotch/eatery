import React from 'react'
import { AiOutlineLike, AiOutlineShareAlt } from 'react-icons/ai'
import { BiMessageDots } from 'react-icons/bi'
import Unsplash from '../../image/unsplash_dphM2U1xq0U.png'
import Unsplash1 from '../../image/unsplash_MqT0asuoIcU.png'
import Unsplash2 from '../../image/unsplash_lP5MCM6nZ5A.png'

import './blog.css'

const aboutdata = [
    {
        image: Unsplash,
        date: '22 August 2022',
        content: 'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis',
        detail: 'Learn More'
    },
    {
        image: Unsplash1,
        date: '22 August 2022',
        content: 'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis',
        detail: 'Learn More'
    },
    {
        image: Unsplash2,
        date: '22 August 2022',
        content: 'Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis',
        detail: 'Learn More'
    }
]

const Blog = () => {
    const blogs = aboutdata.map(blog => {
       return <div className='blog'>
            <img src={blog.image} alt='cook1' />
            <section className='blog_sec2'>
                <p className='blog_date'>{blog.date}</p>
                <h3>{blog.content}</h3>
                <div className='blog_sec21'>
                    <p>{blog.detail}</p>
                    <div>
                        <AiOutlineLike />
                        <BiMessageDots className='message'/>
                        <AiOutlineShareAlt />
                    </div>
                </div>
            </section>
        </div>
    })

  return (
    <div className='blog_sec'>
        <h3 className='blog_head' >Blog Post</h3>
        <h3 className='blog_sub'><span>La</span>test News & Blog</h3>
        <div className='blog_section'>
            {blogs}
        </div>
    </div>
  )
}

export default Blog