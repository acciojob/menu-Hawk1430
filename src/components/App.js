import React, { useState } from 'react'
import './styles.css';
import Menu from './Menu.js'

export const menu = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "Breakfast",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    desc: "Fluffy pancakes served with syrup and strawberries.",
  },
  {
    id: 2,
    title: "Diner Double",
    category: "Lunch",
    price: 13.99,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    desc: "Classic cheeseburger with fries and pickles.",
  },
  {
    id: 3,
    title: "Godzilla Milkshake",
    category: "Shakes",
    price: 6.99,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    desc: "Monster-sized strawberry shake with toppings.",
  },
  {
    id: 4,
    title: "Country Delight",
    category: "Breakfast",
    price: 20.99,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    desc: "Eggs, toast, and hash browns in country style.",
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "Lunch",
    price: 22.99,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    desc: "Egg sandwich with spicy mayo and lettuce.",
  },
  {
    id: 6,
    title: "Oreo Dream",
    category: "Shakes",
    price: 18.99,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    desc: "Oreo shake with fudge and whipped cream.",
  },
  {
    id: 7,
    title: "Bacon Bash",
    category: "Breakfast",
    price: 14.99,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    desc: "Crispy bacon with scrambled eggs and toast.",
  },
  {
    id: 8,
    title: "Grilled Cheese Deluxe",
    category: "Lunch",
    price: 12.49,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    desc: "Grilled cheese with tomato soup.",
  },
  {
    id: 9,
    title: "Mango Tango",
    category: "Shakes",
    price: 7.99,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    desc: "Refreshing mango shake with lime.",
  },
  {
    id: 10,
    title: "Sunny Side Up",
    category: "Breakfast",
    price: 10.99,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    desc: "Sunny side up eggs with toast and avocado.",
  },
  {
    id: 11,
    title: "Veggie Wrap",
    category: "Lunch",
    price: 11.99,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    desc: "Healthy veggie wrap with hummus and greens.",
  },
  {
    id: 12,
    title: "Chocolate Thunder",
    category: "Shakes",
    price: 8.49,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    desc: "Decadent chocolate shake with fudge drizzle.",
  },
];


const App = () => {
    const [category, setCategory] = useState('All');
    const handleCategory = (value) => {
        setCategory(value);
    }

    return (
        <div id='main'>
            <div className='main__title'>
                <h1>Our Menu</h1>
            </div>
            <div className='main__category' id='category'>
                <button onClick={() => handleCategory('All')}>All</button>
                <button id='#filter-btn-1' onClick={() => handleCategory('Breakfast')}>Breakfast</button>
                <button id='#filter-btn-2' onClick={() => handleCategory('Lunch')}>Lunch</button>
                <button id='#filter-btn-3' onClick={() => handleCategory('Shakes')}>Shakes</button>
            </div>
            <Menu menu={menu} category={category}/>

        </div>
    );
}

export default App