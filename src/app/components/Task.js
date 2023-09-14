// components/Task.js
import React, { useState } from "react";
import styles from "../page.module.css";

const Task = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onUpdate(task.id, newTitle);
    setIsEditing(false);
  };

  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <div className={styles.task}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTitle}
            onChange={handleTitleChange}
            className={styles.editInput}
          />
          <button onClick={handleSaveClick} className={styles.editButton}>
            Guardar
          </button>
        </>
      ) : (
        <>
          <p>{task.title}</p>
          <div className={styles.buttons}>
            <button onClick={handleEditClick} className={styles.editButton}>
              Editar
            </button>
            <button
              onClick={() => onDelete(task.id)}
              className={styles.deleteButton}
            >
              Eliminar
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
