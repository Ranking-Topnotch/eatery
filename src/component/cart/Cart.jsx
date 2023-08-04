import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector  } from 'react-redux'
import { remove } from '../store/cartSlice';

const Cart = () => {
    const cartProduct = useSelector(state => state.goods)
    const [hoveredItem, sethoveredItem] = React.useState('')
    const dispatch = useDispatch()

    const handleMouseOver = (itemId) => {
      sethoveredItem(itemId)
    }
  
    const handleMouseLeave = () => {
      sethoveredItem('')
    }

    const removeCart = shopItem => {
      dispatch(remove(shopItem))
    }

    const cartGoods = cartProduct.map(shopItem => {
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
      <button onClick={() => removeCart(shopItem.idCategory)}>Remove</button>  
    </div>
    })

  return (
    <div className='shop_item'>{cartGoods}</div>
  )
}

export default Cart