import React from 'react';
import styles from '../Section/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={styles.Section}>
      <h2 className={styles.Title}>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
