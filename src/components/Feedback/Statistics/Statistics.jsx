import React from 'react';
import styles from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2 className={styles.Title}>Statistics</h2>
      <ul className={styles.List}>
        <li className={styles.Good}>
          <p className={styles.Label}>Good:</p>
          <p className={styles.Amount}>{good}</p>
        </li>
        <li className={styles.Neutral}>
          <p className={styles.Label}>Neutral:</p>
          <p className={styles.Amount}>{neutral}</p>
        </li>
        <li className={styles.Bad}>
          <p className={styles.Label}>Bad:</p>
          <p className={styles.Amount}>{bad}</p>
        </li>
        <li className={styles.Total}>
          <p className={styles.Label}>Total:</p>
          <p className={styles.Amount}>{total}</p>
        </li>
        <li className={styles.Positive__Percentage}>
          <p className={styles.Label}>Positive Feedback:</p>
          <p className={styles.Amount}>{positivePercentage}</p>
        </li>
      </ul>
    </>
  );
};

export default Statistics;
