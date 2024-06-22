import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/newsSlice';
import './Pagination.css'; 

const Pagination = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state.news);

  const handleNextPage = () => {
    dispatch(setPage(page + 1));
  };

  const handlePreviousPage = () => {
    if (page > 1) dispatch(setPage(page - 1));
  };

  return (
    <div className="pagination">
      <button onClick={handlePreviousPage} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default Pagination;
