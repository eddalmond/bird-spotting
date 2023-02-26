import React, { useState } from 'react';

function SightingsForm() {
  const [species, setSpecies] = useState('');
  const [date, setDate] = useState('');

  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div>
      <h2>Record a Sighting</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Species:
          <input type="text" value={species} onChange={handleSpeciesChange} />
        </label>
        <label>
          Date:
          <input type="date" value={date} onChange={handleDateChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SightingsForm;
