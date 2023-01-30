import React from 'react';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filter-selectors';

export const Filter = () => {
  const dispatch = useDispatch(selectFilter);
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        placeholder="Filter"
        onChange={ev => dispatch(filter(ev.target.value.toLowerCase()))}
      />
    </label>
  );
};
