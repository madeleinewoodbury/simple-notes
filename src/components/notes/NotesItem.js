import React, { useContext } from 'react';
import NoteContext from '../../context/note/noteContext';

const NotesItem = ({ note }) => {
  const noteContext = useContext(NoteContext);
  const { deleteNote, setCurrent, clearCurrent } = noteContext;

  const { _id, title, text } = note;

  const onEdit = () => {
    setCurrent(note);
  };

  const onDelete = () => {
    deleteNote(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">{title}</h3>
      <p>{text}</p>
      <p className="my-1">
        <button className="btn btn-dark btn-sm" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default NotesItem;
