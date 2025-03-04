import React from 'react';
import styles from './ErrorState.module.css';

interface ErrorStateProps {
  message: string;
}

const ErrorState: React.FC<ErrorStateProps> = ({ message }) => {
  return (
    <div className={styles.error}>
      Erro ao carregar dados: {message}
    </div>
  );
};

export default ErrorState;