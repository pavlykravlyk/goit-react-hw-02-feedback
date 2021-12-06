import React from 'react';
import styles from '../FeedbackOptions/FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.List}>
      {options.map((label, idx) => (
        <li key={idx} className={styles.Item}>
          <button
            className={styles.Btn}
            type="button"
            onClick={() => onLeaveFeedback(label)}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
