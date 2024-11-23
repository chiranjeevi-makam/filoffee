import React, { useState, useEffect } from 'react';
import TaskForm from './components/task';
import TaskList from './components/TaskList';
import TaskEditDialog from './components/TaskDilogue';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [isEditOpen, setEditOpen] = useState(false);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = (task) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const editTask = (index) => {
    setCurrentTask({ ...tasks[index], index });
    setEditOpen(true);
  };

  const updateTask = (editedTask) => {
    const updatedTasks = tasks.map((task, index) =>
      index === editedTask.index ? { ...editedTask, index: undefined } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Task Tracker</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} />
      {isEditOpen && (
        <TaskEditDialog
          open={isEditOpen}
          task={currentTask}
          handleClose={() => setEditOpen(false)}
          updateTask={updateTask}
        />
      )}
    </div>
  );
};

export default App;
