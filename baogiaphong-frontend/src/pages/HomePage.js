import React from "react";
import ArticleCard from "../components/ArticleCard";
import ArticleCardLatestNew from "../components/ArticleCardLatestNews";
import articles from "../data/articles";
import styles from "../styles/HomePage.module.css";
import Banner from "../components/Banner";
import TopViews from "../components/TopRead";

function HomePage() {
  return (
    <div className="container mt-4">
       {/* <div className="box-banner">
        <Banner/>
       </div> */}

      {/* <h2 hidden className="mb-4">Tin Mới Nhất</h2> */}
      <div className="row">
        <div className="col-md-8">
          <ArticleCardLatestNew articles={articles} />
        </div>
        <div className="col-md-4">
          <TopViews/>
        </div>
      </div>

      <h2 className="mt-5 mb-4">Tin Nổi Bật</h2>
      <div className={styles.tinNoiBatContainer}>
        {articles
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(1)
          .map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
      </div>
    </div>
  );
}

export default HomePage;
