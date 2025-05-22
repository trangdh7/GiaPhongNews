import React from "react";
import { Link } from "react-router-dom";

function ArticleCardLatestNew({ articles }) {
  if (!articles || articles.length === 0) return null;

  const sortedArticles = [...articles].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  const latest = sortedArticles[0];

  return (
    <div className="card mb-3 position-relative">
      <img src={latest.image} className="card-img-top" alt={latest.title} />
      <div className="card-body">
        <h5 className="card-title">
          <Link
            to={`/article/${latest.slug}-${latest.id}.htm`}
            className="text-decoration-none text-dark fw-bold"
          >
            {latest.title}
          </Link>
        </h5>
        <p className="card-text">{latest.summary}</p>
        <span
          className="badge bg-danger position-absolute"
          style={{ top: "10px", left: "10px", zIndex: 1 }}
        >
          Tin mới nhất
        </span>
      </div>
    </div>
  );
}

export default ArticleCardLatestNew;
