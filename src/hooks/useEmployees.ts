import { useState, useEffect } from 'react';
import { Employee } from '../types';

export function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Função para buscar funcionários
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Tenta obter dados da API primeiro
        try {
          const response = await fetch('http://localhost:3000/employees');
          
          if (response.ok) {
            const data = await response.json() as Employee[];
            setEmployees(data);
            setFilteredEmployees(data);
            return;
          }
        } catch (apiError) {
          console.log('API não disponível, tentando arquivo local db.json');
        }
        
        // Se falhar, tenta o arquivo local
        try {
          const response = await fetch('/db/db.json');
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          const data = await response.json();
          
          // Verifica o formato dos dados
          if (Array.isArray(data)) {
            setEmployees(data);
            setFilteredEmployees(data);
          } else if (data.employees && Array.isArray(data.employees)) {
            setEmployees(data.employees);
            setFilteredEmployees(data.employees);
          } else {
            setEmployees([]);
            setFilteredEmployees([]);
            console.error('Formato de dados inesperado');
          }
        } catch (error) {
          if (error instanceof Error) {
            setError(`Erro ao carregar dados: ${error.message}`);
          } else {
            setError('Erro desconhecido ao carregar dados');
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Erro desconhecido');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // Efeito para filtrar funcionários quando a query de pesquisa mudar
  useEffect(() => {
    if (!searchQuery) {
      setFilteredEmployees(employees);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const filtered = employees.filter(employee => 
      employee.name.toLowerCase().includes(query) ||
      employee.job.toLowerCase().includes(query) ||
      employee.phone.toLowerCase().includes(query)
    );
    
    setFilteredEmployees(filtered);
  }, [searchQuery, employees]);

  return {
    employees,
    filteredEmployees,
    isLoading,
    error,
    searchQuery,
    setSearchQuery
  };
}