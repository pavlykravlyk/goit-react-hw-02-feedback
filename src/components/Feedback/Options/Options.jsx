import React from 'react';
import styles from '../Options/Options.module.css';

const Options = ({
  options,
  onLeaveNeutralFeedback,
  onLeaveBadFeedback,
  onLeaveGoodFeedback,
}) => {
  return (
    <>
      <b className={styles.Title}>{options}</b>
      <ul className={styles.List}>
        <li className={styles.Item}>
          <button
            className={styles.Good}
            type="button"
            onClick={onLeaveGoodFeedback}
          >
            Good
          </button>
        </li>
        <li className={styles.Item}>
          <button
            className={styles.Neutral}
            type="button"
            onClick={onLeaveNeutralFeedback}
          >
            Neutral
          </button>
        </li>
        <li className={styles.Item}>
          <button
            className={styles.Bad}
            type="button"
            onClick={onLeaveBadFeedback}
          >
            Bad
          </button>
        </li>
      </ul>
    </>
  );
};

export default Options;
