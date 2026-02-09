import React from 'react'
import BlogCard from "./BlogCard";
import styles from "./Blog.module.css";

const blogData = [
  { id: 1, title: "How to prepare a delicious gluten free sushi", date: "January 3, 2023", image: new URL('../../assets/blogs/blog/image34.png', import.meta.url).href },
  { id: 2, title: "Exclusive baking lessons from the pastry king", date: "January 3, 2023", image: new URL('../../assets/blogs/blog/image35.png', import.meta.url).href, highlight: true },
  { id: 3, title: "How to prepare the perfect fries in an air fryer", date: "January 3, 2023", image: new URL('../../assets/blogs/blog/image36.png', import.meta.url).href },
  { id: 4, title: "How to prepare delicious chicken tenders", date: "January 3, 2023", image: new URL('../../assets/blogs/blog/image37.png', import.meta.url).href },
  { id: 5, title: "5 great cooking gadgets you can buy to save time", date: "January 3, 2023", image: new URL('../../assets/blogs/blog/image38.png', import.meta.url).href },
  { id: 6, title: "The secret tips & tricks to prepare a perfect burger", date: "January 3, 2023", image: new URL('../../assets/blogs/blog/image39.png', import.meta.url).href },
  { id: 7, title: "7 delicious cheesecake recipes you can prepare", date: "January 3, 2023", image: new URL('../../assets/blogs/blog/image40.png', import.meta.url).href },
  { id: 8, title: "5 great pizza restaurants you should visit this city", date: "January 3, 2023", image: new URL('../../assets/blogs/blog/image41.png', import.meta.url).href },
  { id: 9, title: "How to prepare a delicious gluten free sushi", date: "January 3, 2023", image: new URL('../../assets/blogs/blog/image42.png', import.meta.url).href },
  { id: 10, title: "How to prepare a delicious wrap at home", date: "January 3, 2023", image: new URL('../../assets/blogs/blog/image43.png', import.meta.url).href },
  { id: 11, title: "Top 20 simple and quick desserts for kids", date: "January 3, 2023", image: new URL('../../assets/blogs/blog/image44.png', import.meta.url).href },
  { id: 12, title: "Top 20 simple and quick desserts for kids", date: "January 3, 2023", image: new URL('../../assets/blogs/blog/image45.png', import.meta.url).href },
];

export default function Blog() {
  return (
    <section className={styles.blog}>
      <div className={styles.header}>
        <h1>Our Blog & Articles</h1>
        <p>
          We consider all the drivers of change gives you the components you need <br /> to change to create a truly happens.
        </p>
      </div>

      <div className={styles.grid}>
        {blogData.map((item) => (
          <BlogCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}
