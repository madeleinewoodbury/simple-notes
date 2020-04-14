import React from 'react';

const NotesItem = ({ note }) => {
  const onEdit = () => {
    alert('edit');
  };

  const onDelete = () => {
    alert('delete');
  };

  const { _id, title, text } = note;

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
