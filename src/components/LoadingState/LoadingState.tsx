import React from 'react';
import styles from './LoadingState.module.css';

const LoadingState: React.FC = () => {
  return (
    <div className={styles.loading}>
      Carregando...
    </div>
  );
};

export default LoadingState;