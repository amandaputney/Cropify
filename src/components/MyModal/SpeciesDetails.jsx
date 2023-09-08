import React, { useState } from 'react';
import MyModal from './MyModal';
import SearchForm from '../SearchForm/SearchForm';

export default function SpeciesDetails() {
  const [selectedSpeciesData, setSelectedSpeciesData] = useState(null);

  // This function will receive the selected species data from SearchForm
  const handleSpeciesSelection = (speciesData) => {
    setSelectedSpeciesData(speciesData);
  };

  return (
    <div>
      <SearchForm onSpeciesSelection={handleSpeciesSelection} />
      <MyModal selectedSpeciesData={selectedSpeciesData} />
    </div>
  );
}