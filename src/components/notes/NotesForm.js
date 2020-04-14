import React, { useState, useEffect, useContext } from 'react';
import NoteContext from '../../context/note/noteContext';

const NotesForm = () => {
  const noteContext = useContext(NoteContext);
  const { addNote, current, clearCurrent, updateNote } = noteContext;

  useEffect(() => {
    if (current !== null) {
      setFormData(current);
    } else {
      setFormData({
        title: '',
        text: '',
      });
    }
  }, [noteContext, current]);

  const [formData, setFormData] = useState({
    title: '',
    text: '',
  });

  const { title, text } = formData;

  const clearAll = () => {
    clearCurrent();
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addNote(formData);
    } else {
      updateNote(formData);
    }
    clearAll();
  };

  return (
    <form onSubmit={onSubmit}>
      <h1 className="text-primary my-1">
        {current ? 'Edit Note' : 'Add Note'}
      </h1>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={onChange}
        required
      />
      <textarea
        placeholder="Text"
        required
        name="text"
        value={text}
        onChange={onChange}
        rows="5"
        cols="10"
      ></textarea>
      <div>
        <input
          type="submit"
          value={current ? 'Edit Note' : 'Add Note'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <button className="btn btn-semi-dark btn-block" onClick={clearAll}>
          Clear
        </button>
      )}
    </form>
  );
};

export default NotesForm;
