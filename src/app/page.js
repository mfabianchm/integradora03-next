"use client";

// pages/index.js
import React, { useState } from "react";
import Task from "./components/Task";
import styles from "./page.module.css";

const Home = () => {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Tarea 1" },
    { id: 2, title: "Tarea 2" },
    { id: 3, title: "Tarea 3" },
    { id: 4, title: "Tarea 4" },
  ]);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleCreateTask = () => {
    const taskId = tasks.length + 1;
    const newTaskObject = { id: taskId, title: newTask };
    setTasks([...tasks, newTaskObject]);
    setNewTask("");
  };

  const handleUpdateTask = (taskId, newTitle) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: newTitle } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.container}>
      <h1>Lista de Tareas</h1>
      <p>
        Este es un pequeño todo-list. Por favor, agrega tu primera actividad.
      </p>

      <div className={styles.form}>
        <h2>Crear Tarea</h2>
        <input
          type="text"
          placeholder="Ingrese el título de la tarea"
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={handleCreateTask}>Crear</button>
      </div>

      <div className={styles.task}>
        <h2>Tareas</h2>
        {tasks.map((task) => (
          <div key={task.id} className={styles.task}>
            <Task
              task={task}
              onUpdate={handleUpdateTask}
              onDelete={handleDeleteTask}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
