import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Box } from '@mui/material';

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'Pending',
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ title: '', description: '', dueDate: '', status: 'Pending' });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto' }}>
      <TextField
        label="Title"
        name="title"
        value={task.title}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        label="Description"
        name="description"
        value={task.description}
        onChange={handleChange}
        fullWidth
        multiline
        rows={3}
      />
      <TextField
        label="Due Date"
        name="dueDate"
        type="date"
        value={task.dueDate}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        fullWidth
        required
      />
      <FormControl fullWidth>
        <InputLabel>Status</InputLabel>
        <Select
          name="status"
          value={task.status}
          onChange={handleChange}
        >
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">Add Task</Button>
    </Box>
  );
};

export default TaskForm;
