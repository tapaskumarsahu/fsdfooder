import React, { useState } from 'react'
import styles from './Menu.module.css'
import img1 from '../../assets/menu/image25.png'
import img2 from '../../assets/menu/image26.png'
import img3 from '../../assets/menu/image27.png'
import img4 from '../../assets/menu/image28.png'
import img5 from '../../assets/menu/image29.png'
import img6 from '../../assets/menu/image30.png'
import img7 from '../../assets/menu/image31.png'
import img8 from '../../assets/menu/image32.png'


const menuData = [
  { id: 1, title: "Fried Eggs", price: 9.99, category: "Breakfast", img: img1 },
  { id: 2, title: "Hawaiian Pizza", price: 15.99, category: "Main Dishes", img: img2 },
  { id: 3, title: "Martinez Cocktail", price: 7.25, category: "Drinks", img: img3 },
  { id: 4, title: "Butterscotch Cake", price: 20.99, category: "Desserts", img: img4 },
  { id: 5, title: "Mint Lemonade", price: 5.89, category: "Drinks", img: img5 },
  { id: 6, title: "Chocolate Icecream", price: 18.05, category: "Desserts", img: img6 },
  { id: 7, title: "Cheese Burger", price: 12.55, category: "Main Dishes", img: img7 },
  { id: 8, title: "Classic Waffles", price: 12.99, category: "Breakfast", img: img8 },
];

const categories = ["All", "Breakfast", "Main Dishes", "Drinks", "Desserts"];

export default function Menu() {
  const [active, setActive] = useState("All");

  const filteredMenu =
    active === "All"
      ? menuData
      : menuData.filter(item => item.category === active);
  return (
    <div className={styles.menuPage}>
      {/* Header */}
      <div className={styles.header}>
        <h1>Our Menu</h1>
        <p>We consider all the drivers of change gives you the components <br /> need to change to create a truly happens.</p>
      </div>

      {/* Filter Buttons */}
      <div className={styles.filters}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${active === cat ? styles.active : ""}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className={styles.grid}>
        {filteredMenu.map(item => (
          <div className={styles.card} key={item.id}>
            <div className={styles.imageWrap}>
              <img src={item.img} alt={item.title} />
            </div>
            <div className={styles.cardBody}>
              <div className={styles.price}>${item.price.toFixed(2)}</div>
              <h4 className={styles.title}>{item.title}</h4>
              <p className={styles.desc}>Made with eggs, lettuce, salt, oil and other ingredients.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
