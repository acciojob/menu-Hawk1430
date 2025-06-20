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
              i.category === "breakfast"
                ? "menu-item-breakfast"
                : i.category === "lunch"
                ? "menu-item-lunch"
                : "menu-item-shakes"
            } 
    >
      {filteredMenu.map(item => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Menu;
