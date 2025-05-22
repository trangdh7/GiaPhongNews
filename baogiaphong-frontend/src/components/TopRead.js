import React from "react";
import styles from "../styles/TopReading.module.css"; // có thể tái sử dụng CSS
import articles from "../data/articles";
import { Link } from "react-router-dom";

const TopViews = () => {
  // Sắp xếp theo lượt xem giảm dần và lấy top 5
  const topViewedArticles = [...articles]
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  return (
    <aside className={styles.container}>
      <h2 className={styles.header}>Đọc Nhiều</h2>
      <div className={styles.articleList}>
        {topViewedArticles.map((article) => (
          <div key={article.id} className={styles.articleItem}>
            <img
              src={article.image}
              alt="Thumbnail"
              className={styles.thumbnail}
            />
            <p className={styles.title}>
              <Link
                to={`/article/${article.slug}-${article.id}.htm`}
                className="text-decoration-none text-dark fw-bold"
              >
                {article.title}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default TopViews;
