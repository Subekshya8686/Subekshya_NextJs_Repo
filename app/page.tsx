"use client"
import React from 'react';
import ButtonComponent from './components/buttonDemo';
import TableComponent from './components/new';
// import muiTypo from './components/muiTypo';
import { Stack, Container, Grid, Typography } from '@mui/material';


const Home: React.FC = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'age', headerName: 'Age', width: 70 },
  ];

  const rows = [
    { id: 1, name: 'John Doe', age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    // Add more rows as needed
  ];
  return (
    <Container>
      <Grid container spacing={3} 
      direction= "column" justifyContent="center" 
      alignItems="center" margin="0" padding={5} 
      justifyItems="center" alignContent='center'>
        <Typography variant='h6'>
          Hello World!
          </Typography>
        <ButtonComponent>Click me</ButtonComponent>
        <TableComponent columns={columns} rows={rows} getRowId={(row) => row.id.toString()} />
    </Grid>
    </Container>
  );
};

export default Home;
