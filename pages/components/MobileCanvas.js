import React, { useState, useEffect } from 'react';
import styles from './styles/MobileCanvas.module.css';
import Link from 'next/link';
import { CLOSE } from './icons';

function MobileCanvas({ name, show, handleClose, ...props }) {
  return (
    <section className={styles.background}>
      <div className={styles.header}>
        <div className={styles.name}>MENU</div>
        <div className={styles.closeBtn} onClick={handleClose}>
          <CLOSE />
        </div>
      </div>
      <div className={styles.body}>
        <h2 className={styles.menu}>
          <Link href="/error">
            <a className={styles.link}>PLAY</a>
          </Link>
          <Link href="/error">
            <a className={styles.link}>SHOP</a>
          </Link>
          <Link href="/about">
            <a className={styles.link}>ABOUT</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>STORE</a>
          </Link>
        </h2>
      </div>
    </section>
  );
}
export default MobileCanvas;
