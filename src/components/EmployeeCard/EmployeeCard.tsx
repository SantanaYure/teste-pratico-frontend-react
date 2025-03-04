import React, { useState } from 'react';
import { Employee } from '../../types';
import { formatDate, formatPhone } from '../../utils/formatters';
import styles from './EmployeeCard.module.css';

interface EmployeeCardProps {
  employee: Employee;
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ employee }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const imageSrc = employee.image.startsWith('http') 
    ? employee.image 
    : `assets/images/${employee.image}`;
  
  return (
    <div className={styles.employeeCard}>
      <div className={styles.cardHeader} onClick={() => setIsExpanded(!isExpanded)}>
        <div className={styles.photoContainer}>
          <img 
            src={imageSrc} 
            alt={`Foto de ${employee.name}`} 
            className={styles.employeePhoto}
          />
        </div>
        <div className={styles.employeeName}>{employee.name}</div>
        <div className={styles.expandIcon}>
          {isExpanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 12 8" fill="none">
              <path d="M1.41 7.41L6 2.83L10.59 7.41L12 6L6 0L0 6L1.41 7.41Z" fill="#0950FF"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 12 8" fill="none">
              <path d="M1.41 0.59L6 5.17L10.59 0.59L12 2L6 8L0 2L1.41 0.59Z" fill="#0950FF"/>
            </svg>
          )}
        </div>
      </div>
      
      {isExpanded && (
        <div className={styles.cardDetails}>
          <div className={styles.detailRow}>
            <div className={styles.detailLabel}>Cargo</div>
            <div className={styles.detailValue}>{employee.job}</div>
          </div>
          <div className={styles.detailRow}>
            <div className={styles.detailLabel}>Data de admissão</div>
            <div className={styles.detailValue}>{formatDate(employee.admission_date)}</div>
          </div>
          <div className={styles.detailRow}>
            <div className={styles.detailLabel}>Telefone</div>
            <div className={styles.detailValue}>{formatPhone(employee.phone)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;