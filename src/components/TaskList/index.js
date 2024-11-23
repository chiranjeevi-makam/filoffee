import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const TaskList = ({ tasks, deleteTask, editTask }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: 800, margin: 'auto', marginTop: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((task, index) => (
            <TableRow key={index}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>{task.dueDate}</TableCell>
              <TableCell>{task.status}</TableCell>
              <TableCell>
                <Button variant="outlined" color="primary" onClick={() => editTask(index)}>Edit</Button>
                <Button variant="outlined" color="secondary" onClick={() => deleteTask(index)} sx={{ marginLeft: 1 }}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskList;
