import React from 'react';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchQuery } from '../../redux/filterSlice';
import { getFilterQuery } from '../../redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterQuery);

  return (
    <label className={css.Filter__label}>
      Find contact
      <input
        className={css.Filter__input}
        type="text"
        value={filter}
        onChange={e => dispatch(searchQuery(e.target.value))}
        placeholder="Rosie Simpson"
      />
    </label>
  );
};

export default Filter;
