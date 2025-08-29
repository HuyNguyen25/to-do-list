import styles from './ListItem.module.css';
import trashIcon from '../assets/trash.svg';
import { useState } from 'react';

export default function ListItem({ content, onChange, deleteOnClick }) {
  return (
    <div className={styles.card}>
      <input className={styles.todo} value={content} onChange={onChange} />
      <div className={styles.buttonContainer}>
        <button className={styles.deleteButton} onClick={deleteOnClick}>
          <img className={styles.icon} src={trashIcon} />
        </button>
      </div>
    </div>
  );
}
