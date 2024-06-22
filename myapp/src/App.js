import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchNews } from './redux/newsSlice';
import Header from './components/Header';
import ArticleCard from './components/ArticleCard';
import ArticleDetail from './components/ArticleDetail';
import Pagination from './components/Pagination';
import CategoryFilter from './components/CategoryFilter';
import './styles.css';

const App = () => {
  const dispatch = useDispatch();
  const { articles, status, error, category, page } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(fetchNews({ category, page }));
  }, [dispatch, category, page]);

  return (
    <>
      <Header />
      <CategoryFilter />
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      <div className="articles-list">
        {articles.map((article) => (
          <ArticleCard key={article.title} article={article} />
        ))}
      </div>
      <Pagination />
      <Routes>
        <Route path="/article/:title" element={<ArticleDetail />} />
      </Routes>
    </>
  );
};

export default App;
