import React from 'react';
import Dropdown from '../components/Dropdown';

function DropdownPage() {
  // Dropdown options
  const options = [
    {
      label: 'Red spicy',
      value: 'red',
    },
    {
      label: 'Green spinachy',
      value: 'green',
    },
    {
      label: 'Blue lagoon',
      value: 'blue',
    },
  ];

  return (
    <div>
      <Dropdown options={options} />
    </div>
  );
}

export default DropdownPage;