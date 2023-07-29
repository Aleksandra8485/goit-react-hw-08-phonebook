import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search contacts..."
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
