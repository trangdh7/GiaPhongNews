import React from "react";
import { useParams } from "react-router-dom";
import articles from "../data/articles";
import styles from "../styles/articlePage.module.css"; // CSS module

function ArticlePage() {
  const { slugId } = useParams();

  const match = slugId.match(/^(.*)-(\d+)\.htm$/);
  if (!match) {
    return <p className={styles.error}>Định dạng URL không đúng.</p>;
  }

  const slug = match[1];
  const id = match[2];

  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return <p className={styles.error}>Bài viết không tồn tại.</p>;
  }

  return (
    <div className={styles.articleContent}>
      <h1>{article.title}</h1>
      <p className="text-muted">
        {new Date(article.date).toLocaleString("vi-VN")}
      </p>
      <img src={article.image} alt={article.title} />

      {(article.photoDescription || article.photoAuthor) && (
        <div className={styles.figcaption}>
          {article.photoDescription} - {article.photoAuthor}
        </div>
      )}

      <div>
        <p>{article.content}</p>
      </div>

      <div className={styles.author}>Tác giả: {article.author}</div>

      {/* <div className={styles.comment}>
        <h3>Bình luận</h3>
        <textarea
          className={styles.textarea}
          placeholder="Nhập bình luận của bạn..."
          rows="4"
        ></textarea>
      </div> */}
    </div>
  );
}

export default ArticlePage;
