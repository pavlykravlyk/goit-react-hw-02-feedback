import React from 'react';
import styles from '../Notification/Notification.module.css';

const Notification = ({ message }) => (
  <h2 className={styles.Title}>{message}</h2>
);

export default Notification;
