import React from 'react'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import { AiOutlineAlignLeft } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  const [nav, setNav] = React.useState(true)

  function navFlip(){
    setNav(prev => !prev)
  }

  console.log(nav)
  return (
    <div className='nav__con'>
      <h2 className='nav__header'><span>Food</span>tuck</h2>
      <div className='navivation'>
          <AiOutlineAlignLeft onClick={navFlip} className={nav ? 'navbar' : 'open'}/>
          <FaTimes onClick={navFlip} className={nav ? 'closed' : 'navbar'}/> 
      </div>
      <nav className={nav ? 'navbar_con_o' : 'navbar_con_c'}>
        <ul className={nav ? 'navbar_open' : 'navbar_closed'}>
          <NavLink end className={({isActive}) => isActive ? 'nav__active' : null}><li>Home</li></NavLink>
          <NavLink className={({isActive}) => isActive ? 'nav__active' : null}><li>Menu</li></NavLink>
          <NavLink className={({isActive}) => isActive ? 'nav__active' : null}><li>Blog</li></NavLink>
          <NavLink className={({isActive}) => isActive ? 'nav__active' : null}><li>Page</li></NavLink>
          <NavLink className={({isActive}) => isActive ? 'nav__active' : null}><li>About</li></NavLink>
          <NavLink className={({isActive}) => isActive ? 'nav__active' : null}><li>Shop</li></NavLink>
          <NavLink className={({isActive}) => isActive ? 'nav__active' : ""}><li>Contact</li></NavLink>
        </ul>

        <div className='nav__con-right'>
          <section className='nav__section'>
            <input type='text' placeholder='Search...'/>
            <FiSearch />
          </section>
            
          <main>
            <FiShoppingCart />
          </main>

        </div>
      </nav>
    </div>
  )
}

export default Navbar