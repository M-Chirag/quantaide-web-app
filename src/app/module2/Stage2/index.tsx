// Stage2/index.tsx
import React from 'react';

const Stage2 = ({ data }: { data: string }) => {
  return (
    <div>
      <h2>Stage 2</h2>
      <p>Data from Stage 1: {data}</p>
    </div>
  );
};

export default Stage2;
