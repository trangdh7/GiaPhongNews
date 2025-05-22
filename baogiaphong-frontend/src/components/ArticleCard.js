import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/HomePage.module.css";

function ArticleCard({ article }) {
  if (!article) return null;

  return (
    <div className={styles.card}>
      <img src={article.image} className={styles.cardImg} alt={article.title} />
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>
          <Link
            to={`/article/${article.slug}-${article.id}.htm`}
            className={styles.cardTitle}
          >
            {article.title}
          </Link>
        </h5>
        <p className={styles.cardText}>{article.summary}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
