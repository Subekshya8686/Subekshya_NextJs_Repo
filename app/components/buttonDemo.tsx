import React from 'react';
import Button from '@mui/material/Button';
import { Grid, Stack } from '@mui/material';

interface ButtonProps {
  children: React.ReactNode;
}

const ButtonComponent: React.FC<ButtonProps> = ({ children }) => {
  return (
    <Grid item direction="row" padding-top={100} >
      <Stack>
        <Button variant="contained">{children}</Button>
      </Stack>
    </Grid>
  );
};

export default ButtonComponent;
