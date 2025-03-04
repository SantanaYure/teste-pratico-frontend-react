import React from 'react';
import { Employee } from '../../types';
import { formatDate, formatPhone } from '../../utils/formatters';
import styles from './EmployeeTable.module.css';

interface EmployeeTableProps {
  employees: Employee[];
}

const EmployeeTable: React.FC<EmployeeTableProps> = ({ employees }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.employeeTable}>
        <thead className={styles.tableHead}>
          <tr>
            <th className={styles.tableHeader}>FOTO</th>
            <th className={styles.tableHeader}>NOME</th>
            <th className={styles.tableHeader}>CARGO</th>
            <th className={styles.tableHeader}>DATA DE ADMISSÃO</th>
            <th className={styles.tableHeader}>TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => {
            const imageSrc = employee.image.startsWith('http') 
              ? employee.image 
              : `assets/images/${employee.image}`;
              
            return (
              <tr key={employee.id} className={styles.tableRow}>
                <td className={styles.tableCell}>
                  <img 
                    src={imageSrc} 
                    alt={`Foto de ${employee.name}`} 
                    className={styles.employeePhoto}
                  />
                </td>
                <td className={styles.tableCell}>{employee.name}</td>
                <td className={styles.tableCell}>{employee.job}</td>
                <td className={styles.tableCell}>{formatDate(employee.admission_date)}</td>
                <td className={styles.tableCell}>{formatPhone(employee.phone)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;