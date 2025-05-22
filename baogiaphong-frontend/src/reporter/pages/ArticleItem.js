import React from "react";
import { Link } from "react-router-dom";

function ArticleItem({ article }) {
  const { id, title, status, createdAt } = article;

  const statusBadge = {
    Nháp: "secondary",
    "Chờ duyệt": "warning",
    "Đã xuất bản": "success",
    "Từ chối": "danger",
  };

  return (
    <Link
      to={`/reporter/my-articles/${id}`} 
      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
    >
      <div>
        <h5 className="mb-1">{title}</h5>
        <small className="text-muted">Tạo ngày: {createdAt}</small>
      </div>
      <span className={`badge bg-${statusBadge[status] || "light"}`}>
        {status}
      </span>
    </Link>
  );
}

export default ArticleItem;
