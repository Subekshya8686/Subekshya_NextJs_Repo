// pages/index.tsx
import React from 'react';
import Table from './components/Table'

const Home: React.FC = () => {
  const sampleData = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Doe', age: 30 },
  ];

  return (
    <div>
      <h1>Hello Next.js</h1>
      <Table data={sampleData} />
    </div>
  );
};

export default Home;