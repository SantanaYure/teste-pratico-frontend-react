import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import EmployeeList from './components/EmployeeList/EmployeeList';
import LoadingState from './components/LoadingState/LoadingState';
import ErrorState from './components/ErrorState/ErrorState';
import { useEmployees } from './hooks/useEmployees';
import styles from './App.module.css';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const { 
    filteredEmployees, 
    isLoading, 
    error, 
    searchQuery, 
    setSearchQuery 
  } = useEmployees();

  // Atualiza o estado de mobile/desktop baseado no tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Header />
      
      <main className={styles.mainContent}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Funcionários</h1>
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {isLoading && <LoadingState />}
        
        {error && <ErrorState message={error} />}
        
        {!isLoading && !error && filteredEmployees.length === 0 && (
          <div className={styles.noResults}>
            Nenhum funcionário encontrado
          </div>
        )}
        
        {!isLoading && !error && filteredEmployees.length > 0 && (
          isMobile 
            ? <EmployeeList employees={filteredEmployees} />
            : <EmployeeTable employees={filteredEmployees} />
        )}
      </main>
    </div>
  );
};

export default App;