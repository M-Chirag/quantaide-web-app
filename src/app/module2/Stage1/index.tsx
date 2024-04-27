// Stage1/index.tsx
import React, { useState } from 'react';

const Stage1 = () => {
  const [data, setData] = useState('');

  const handleDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData(event.target.value);
  };

  return (
    <div>
      <h2>Stage 1</h2>
      <input type="text" value={data} onChange={handleDataChange} />
    </div>
  );
};

export default Stage1;
