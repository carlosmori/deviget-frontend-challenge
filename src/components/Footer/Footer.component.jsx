import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => (
  <div className={styles.footerContainer}>
    <div className={styles.developedBy}>
      <span>Developed</span> by Carlos Agustin Mori
    </div>
    <a href="https://www.linkedin.com/in/carlos-agustin-mori-765116128/" target="_blank">
      <img className={styles.footerIcons} src="/linkedin.png" width="35" alt="" />
    </a>
    <a href="https://github.com/carlosmori" target="_blank">
      <img className={styles.footerIcons} src="/github.png" alt="" width="35" />
    </a>
  </div>
);

export default Footer;
