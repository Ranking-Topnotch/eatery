import React from 'react'
import { useParams, Link } from 'react-router-dom'

const ShopDetail = () => {
  const [shops, setShops] = React.useState([])
  const [ingredient, setIngredient] = React.useState(false)
  const param = useParams()
  
  React.useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=5277${param.id}`)
    .then(res => res.json())
    .then(data => setShops(data.meals))
  }, [param.id])

  function handleClick() {
    setIngredient(true)
  }

  function showLess() {
    setIngredient(false)
  }

  const shopDetails = shops.map(shopDetail => {
    return <div className='shopDetail'>
      <img src={shopDetail.strMealThumb} alt='shopDetail' />
      <div className='shopDetail_sub'>
        <h2> Preparaton method</h2>
        <h3>{shopDetail.strInstructions}</h3>
        {ingredient && <h4>Ingredient</h4>}
        {ingredient === false && <h4 onClick={handleClick}>Click to check ingredient for allergis</h4>}
        {
          ingredient ?
          <div> 
            <p>- {shopDetail.strIngredient2}</p>
            <p>- {shopDetail.strIngredient3}</p>
            <p>- {shopDetail.strIngredient4}</p>
            <p>- {shopDetail.strIngredient5}</p>
            <p>- {shopDetail.strIngredient6}</p>
            <p>- {shopDetail.strIngredient7}</p>
            <p>- {shopDetail.strIngredient8}</p>
            <p>- {shopDetail.strIngredient9}</p>
          </div>
          : null
        }
        {ingredient && <h4 onClick={showLess}>Show less</h4>}
      </div>
    </div>
  })
  return (
    <div className='shopDetail_con'>
      <Link to='/shop'>&#x2190; Back to shop</Link>  
      {shopDetails}
    </div>
  )
}

export default ShopDetail