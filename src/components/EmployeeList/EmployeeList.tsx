import React from 'react';
import { Employee } from '../../types';
import EmployeeCard from '../EmployeeCard/EmployeeCard';
import styles from './EmployeeList.module.css';

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listHeader}>
        <div className={`${styles.headerCell} ${styles.headerCellFirst}`}>FOTO</div>
        <div className={styles.headerCell}>NOME</div>
        <div className={`${styles.headerCell} ${styles.headerCellLast}`}>•</div>
      </div>
      
      {employees.map(employee => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;