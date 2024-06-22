import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../redux/newsSlice';
import './CategoryFilter.css'; 

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.news.query);

  return (
    <select value={query} onChange={(e) => dispatch(setQuery(e.target.value))}>
      <option value="Apple">Apple</option>
      <option value="Business">Business</option>
      <option value="Technology">Technology</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Health">Health</option>
      <option value="Science">Science</option>
      <option value="Sports">Sports</option>
    </select>
  );
};

export default CategoryFilter;
