import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'
import './shop.css'

const Shop = () => {
  const [shop, setShop] = React.useState([])
  const dispatchGoods = useDispatch()
  const [hoveredItem, sethoveredItem] = React.useState('')

  React.useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => setShop(data.categories))
  }, [])

  const addToCart = shopItem => {
      dispatchGoods(add(shopItem))
  }

  const handleMouseOver = (itemId) => {
    sethoveredItem(itemId)
  }

  const handleMouseLeave = () => {
    sethoveredItem('')
  }

  const shopItems = shop.map(shopItem => {
   
    return <div>
      <Link to={`/shop/${shopItem.idCategory}`}>
      <div className='shop_list'
      onMouseOver={() => handleMouseOver(shopItem.idCategory)} onMouseLeave={handleMouseLeave}
      >
        <img src={shopItem.strCategoryThumb} alt='shop' />
        <div>
          <h3>{shopItem.strCategory}</h3>
          <p>${shopItem.idCategory}0</p>
        </div>
        {hoveredItem === shopItem.idCategory && <h3 className='description'>{shopItem.strCategoryDescription}</h3> }
        
    </div>
    </Link>
    <button onClick={() => addToCart(shopItem)} className='add_button'>Add to cart</button>
    </div>
  })
  return (
    <div className='shop_con'>
      
      <div>
        <span>Sort By:</span>
        <select>
          <option value='All'>All</option>
          <option value='Beef'>Beef</option>
          <option value='Chicken'>Chicken</option>
          <option value='Desert'>Desert</option>
          <option value='Lamb'>Lamb</option>
        </select>
      </div>

      <div className='shop_item'>
        {shopItems}
      </div>
    </div>
  )
}

export default Shop