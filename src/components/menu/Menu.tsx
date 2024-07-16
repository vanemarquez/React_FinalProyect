import React, { useEffect, useState } from 'react';
import './Menu.css'; 

type MenuItem = {
  id: number;
  title: string;
  link: string;
};

const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/menu')
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error('Error fetching menu:', error));
  }, []);

  return (
    <nav className="menu">
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
