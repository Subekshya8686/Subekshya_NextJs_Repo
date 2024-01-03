import React from 'react';

interface TableProps {
  data: { id: number; name: string; age: number }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
