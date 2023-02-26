import React, { useState, useEffect } from 'react';

function SpeciesList() {
  const [speciesList, setSpeciesList] = useState([]);

  useEffect(() => {
    fetch('https://api.ukbirds.app/species')
      .then(response => response.json())
      .then(data => setSpeciesList(data));
  }, []);

  return (
    <div>
      <h2>UK Bird Species List</h2>
      <ul>
        {speciesList.map(species => (
          <li key={species.id}>{species.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SpeciesList;
