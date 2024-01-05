import React from 'react';
import { Box, Container, Stack } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { DataGrid, GridRowId } from "@mui/x-data-grid";

interface TableProps {
  columns: GridColDef[];
  rows: any[];
  getRowId: (row: any) => string;
}

const TableComponent: React.FC<TableProps> = ({ columns, rows, getRowId }) => {
  return (
    <Box style={{ height: "60vh" }} sx={{ maxWidth: 500, minWidth: 200}} padding={5} textAlign='center'>
      <DataGrid rows={rows} getRowId={getRowId} columns={columns} />
    </Box>
  );
};

export default TableComponent;
