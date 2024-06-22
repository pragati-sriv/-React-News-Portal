import React from 'react';
import './ArticleCard.css'; 

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} />
      )}
      <div className="article-card-content">
        <h2 className="article-card-title">{article.title}</h2>
        <p>{article.description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
