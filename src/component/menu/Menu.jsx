import React from 'react'
import Menu0  from '../../image/Rectangle 8874.png'
import Menu1 from '../../image/unsplash_-GFCYhoRe48 (2).png'
import Menu2 from '../../image/unsplash_90HdOlGbjck.png'
import Menu3 from '../../image/unsplash_akwA-GPF710.png'
import Banner from '../banner/Banner'
import './menu.css'

const Menu = () => {
  return (
    <div className='menu_con'>
        <section className='menu_sec'>
          <img src={Menu0} alt='Menu' />
          <div className='grow'>
            <h2>Starter Menu</h2>
            <div className='menu_part'>
              <div>
                <h3>Alder Grilled Chinook Salmon</h3>
                <p>Toasted French bread topped with romano, checkbar</p>
                <p>500Cal</p>
              </div>
              <span>32$</span>
            </div>

            <div className='menu_part'>
              <div>
                <h3>Berries and creme tart</h3>
                <p>Toasted French bread topped with romano, checkbar</p>
                <p>700Cal</p>
              </div>
              <span>43$</span>
            </div>

            <div className='menu_part'>
              <div>
                <h3>Ground cumin, avocados, peeled and cubed</h3>
                <p>Toasted French bread topped with romano, checkbar</p>
                <p>1000Cal</p>
              </div>
              <span>14$</span>
            </div>

            <div className='menu_part'>
              <div>
                <h3>Spicy Vegan Potato Curry</h3>
                <p>Spreadable cream cheese, crumbled blue cheese</p>
                <p>1000Cal</p>
              </div>
              <span>14$</span>
            </div>
          </div>
        </section>
        
        <section className='menu_sec reverse'>
          <img src={Menu1} alt='Menu' />
          <div className='grow'>
            <h2>Main Course</h2>
            <div className='menu_part'>
              <div>
                <h3>Optic Big Breakfast Combo Menu</h3>
                <p>Toasted French bread topped with romano, cheddar</p>
                <p>500Cal</p>
              </div>
              <span>32$</span>
            </div>

            <div className='menu_part'>
              <div>
                <h3>Cashew Chicken With Stir-Fry</h3>
                <p>Gorgonzola, ricotta, mozzarella, taleggio</p>
                <p>700Cal</p>
              </div>
              <span>43$</span>
            </div>

            <div className='menu_part'>
              <div>
                <h3> Vegetables & Green Salad</h3>
                <p>Ground cumin, avocados, peeled and cubed</p>
                <p>1000Cal</p>
              </div>
              <span>14$</span>
            </div>

            <div className='menu_part'>
              <div>
                <h3>Spicy Vegan Potato Curry</h3>
                <p>Spreadable cream cheese, crumbled blue cheese</p>
                <p>1000Cal</p>
              </div>
              <span>14$</span>
            </div>
          </div>
        </section>

        <Banner />

        <section className='menu_sec'>
          <img src={Menu2} alt='Menu' />
          <div className='grow'>
            <h2>Dessert</h2>
            <div className='menu_part'>
              <div>
                <h3>Fig and lemon cake</h3>
                <p>Toasted French bread topped with romano, checkbar</p>
                <p>500Cal</p>
              </div>
              <span>32$</span>
            </div>

            <div className='menu_part'>
              <div>
                <h3>Creamy mascarpone cake</h3>
                <p>Toasted French bread topped with romano, checkbar</p>
                <p>700Cal</p>
              </div>
              <span>43$</span>
            </div>

            <div className='menu_part'>
              <div>
                <h3>Pastry, blueberries, lemon juice</h3>
                <p>Ground cumin, avocados, peeled and cubed</p>
                <p>1000Cal</p>
              </div>
              <span>14$</span>
            </div>

            <div className='menu_part'>
              <div>
                <h3>Spicy Vegan Potato Curry</h3>
                <p>Spreadable cream cheese, crumbled blue cheese</p>
                <p>1000Cal</p>
              </div>
              <span>14$</span>
            </div>
          </div>
        </section>

        <section className='menu_sec reverse'>
          <img src={Menu3} alt='Menu' />
          <div className='grow'>
            <h2>Drinks</h2>
            <div className='menu_part'>
              <div>
                <h3>Caffè macchiato</h3>
                <p>Toasted French bread topped with romano, checkbar</p>
                <p>500Cal</p>
              </div>
              <span>32$</span>
            </div>

            <div className='menu_part'>
              <div>
                <h3>Caffe Latte Campuri</h3>
                <p>Toasted French bread topped with romano, checkbar</p>
                <p>700Cal</p>
              </div>
              <span>43$</span>
            </div>

            <div className='menu_part'>
              <div>
                <h3>Tormentoso Bush Pizza Pintoage</h3>
                <p>Toasted French bread topped with romano, checkbar</p>
                <p>1000Cal</p>
              </div>
              <span>14$</span>
            </div>

            <div className='menu_part'>
              <div>
                <h3>Spicy Vegan Potato Curry</h3>
                <p>Spreadable cream cheese, crumbled blue cheese</p>
                <p>1000Cal</p>
              </div>
              <span>14$</span>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Menu