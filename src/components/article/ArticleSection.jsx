import React from 'react'
import styles from './ArticleSection.module.css'
import blogImage2 from '../../assets/blogs/details/image47.png'

export default function ArticleSection({ title, image }) {
  return (
    <article className={styles.articleStack}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
      </header>

      <figure className={styles.hero}>
        <img src={image} alt="food" />
      </figure>

      <div className={styles.content}>
        <section className={styles.sectionBlock}>
          <h3>What do you need to prepare a home-made burger?</h3>

          <p className={styles.lead}>
            Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.
          </p>

          <ol>
            <li><strong>Quality Beef:</strong> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
            <li><strong>Seasoning:</strong> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
            <li><strong>Don't Overwork the Meat:</strong> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
            <li><strong>Cooking:</strong> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
            <li><strong>Resting:</strong> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
          </ol>
        </section>

        <section className={styles.sectionBlock}>
          <h3>What are the right ingredients to make it delicious?</h3>
          <p>
            Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the palate. Today, we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.
          </p>

          <ol>
            <li><strong>Quality Beef:</strong> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
            <li><strong>Seasoning:</strong> Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
            <li><strong>Don't Overwork the Meat:</strong> When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
            <li><strong>Cooking:</strong> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
            <li><strong>Resting:</strong> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
          </ol>

          <figure className={styles.inlineImage}>
            <img src={blogImage2} alt="food" />
          </figure>

          <h3>What are the right ingredients to make it delicious?</h3>
          <p>
            Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet purus gravida quis blandit turpis..
          </p>
        </section>
      </div>
    </article>
  )
}