import React, { useState } from 'react';
import SearchForm from '../../components/SearchForm/SearchForm';


export default function NewSearchPage() {
  const [searchResults, setSearchResults] = useState([]);



  return (
    <div>
        <h1>What would you like to plant?</h1>
        <SearchForm searchResults={searchResults} />
    </div>
  );
}