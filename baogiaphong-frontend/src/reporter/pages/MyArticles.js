import React from "react";
import ArticleItem from "../pages/ArticleItem";

const dummyArticles = [
  {
    id: 1,
    title: "Bài viết đầu tiên",
    status: "Chờ duyệt",
    createdAt: "2025-04-25",
  },
  {
    id: 2,
    title: "Kinh nghiệm tác nghiệp tại hiện trường",
    status: "Đã xuất bản",
    createdAt: "2025-04-20",
  },
  {
    id: 3,
    title: "Ghi nhanh lễ hội vùng cao",
    status: "Nháp",
    createdAt: "2025-04-15",
  },
];

function MyArticles() {
  return (
    <div>
      <h3 className="mb-4">Bài viết của tôi</h3>
      {dummyArticles.length === 0 ? (
        <p>Chưa có bài viết nào.</p>
      ) : (
        <div className="list-group">
          {dummyArticles.map((article) => (
            <ArticleItem key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyArticles;
