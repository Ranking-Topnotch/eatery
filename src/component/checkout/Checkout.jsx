import React from 'react'
import { useSelector } from 'react-redux'
import './checkout.css'

const Checkout = () => {
    const cartProduct = useSelector(state => state.goods)
    const calculateTotal = () => {
        let total = 0;
    
        cartProduct.forEach(product => {
          const amount = product.idCategory * 1;
          total += amount;
        });
        console.log(total)
        return total++;
      };

    const orders = cartProduct.map(order => {

        return <div className='order_section'>
            <img src={order.strCategoryThumb} alt='shop' />
              <div>
                <h3>{order.strCategory}</h3>
                <p>${order.idCategory}0</p>
            </div>
            <hr />
        </div>
    })
  return (
    <div className='checkout_con'>
        
        <div className='checkout_input'>
            <h3>Shipping Address</h3>
            <div className='checkout_input-con1'>
                <div className='input_first-con'>
                    <input type='text' placeholder='First Name' required />
                    <input type='email' placeholder='Email address' required />
                    <input type='text' placeholder='Company' required />
                    <input type='text' placeholder='City' required />
                    <input type='text' placeholder='Address 1' />
                </div>

                <div className='input_second-con'>
                    <input type='text' placeholder='First Name' required />
                    <input type='email' placeholder='Email address' required />
                    <input type='text' placeholder='Company' required />
                    <input type='text' placeholder='City' required />
                    <input type='text' placeholder='Address 1' />
                </div>
            </div>
        </div>

        {cartProduct.length > 0 &&
            <div className='order_con'>
                {orders}
                
                    <div className='checkout_amount'>
                        <div>
                            <p>Sub-total</p>
                            <span>130$</span>
                        </div>

                        <div>
                            <p>Shipping</p>
                            <span>Free</span>
                        </div> 

                        <div>
                            <p>Discount</p>
                            <span>20%</span>
                        </div> 

                        <div>
                            <p>Taxl</p>
                            <span>54.76$</span>
                        </div>

                        <hr />

                        <div>
                            <p>Total</p>
                            <span>{calculateTotal()}0$</span>
                        </div>
                    </div>  
            
            </div> 

        }
        
    </div>
  )
}

export default Checkout