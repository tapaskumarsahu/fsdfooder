import React from 'react'
import styles from './ReadMore.module.css'
import cardImage1 from '../../assets/blogs/details/image48.png'
import cardImage2 from '../../assets/blogs/details/image49.png'
import cardImage3 from '../../assets/blogs/details/image50.png'
import cardImage4 from '../../assets/blogs/details/image51.png'

const articles = [
  {
    title: "How to prepare a delicious gluten free sushi",
    date: "January 3, 2023",
    image: cardImage1,
  },
  {
    title: "Exclusive baking lessons from the pastry king",
    date: "January 3, 2023",
    image: cardImage2,
  },
  {
    title: "How to prepare the perfect fries in an air fryer",
    date: "January 3, 2023",
    image: cardImage3,
  },
  {
    title: "How to prepare delicious chicken tenders",
    date: "January 3, 2023",
    image: cardImage4,
  },
];

export default function ReadMore() {
  return (
    <section className={styles.readMore}>
      <h2>Read More Articles</h2>
      <p>We consider all the drivers of change gives you the components you <br />need to change to create a truly happens.</p>

      <div className={styles.grid}>
        {articles.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.image} alt={item.title} />
            <div className={styles.cardBody}>
              <span>{item.date}</span>
              <h4>{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
