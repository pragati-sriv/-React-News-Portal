import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ArticleDetail = () => {
  const { title } = useParams();
  const article = useSelector((state) =>
    state.news.articles.find((article) => article.title === title)
  );

  if (!article) return <div>Article not found</div>;

  return (
    <div className="article-detail">
      <h2>{article.title}</h2>
      <img src={article.urlToImage} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
