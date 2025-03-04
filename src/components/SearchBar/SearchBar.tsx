import React from 'react';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Pesquisar"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className={styles.searchButton} aria-label="Buscar">
        <img src="/assets/search-icon.svg" alt="Ícone de busca" className={styles.searchIcon} />
      </button>
    </div>
  );
};

export default SearchBar;