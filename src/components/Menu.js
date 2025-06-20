import React, { useEffect, useState } from 'react';
import Card from './Card';

const Menu = ({ menu, category }) => {
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    if (category === 'All') {
      setFilteredMenu(menu);
    } else {
      const filtered = menu.filter(item => item.category === category);
      setFilteredMenu(filtered);
    }
  }, [menu, category]);

  return (
    <div
     className='menu__dishes'
     data-test-id={
              category === "Breakfast"
                ? "menu-item-breakfast"
                : category === "Lunch"
                ? "menu-item-lunch"
                : category === "Shakes" 
                ? "menu-item-shakes"
                : "menu-item-all"
            } 
    >
      {filteredMenu.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Menu;
