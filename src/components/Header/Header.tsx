import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="../../public/assets/logo.svg" alt="BeTalent Logo" className={styles.logoImage} />
      </div>
    </header>
  );
};

export default Header;