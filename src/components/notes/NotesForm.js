import React, { useState } from 'react';

const NotesForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
  });

  const { title, text } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={onSubmit}>
      <h1 className="text-primary my-1">Add a New Note</h1>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={title}
        onChange={onChange}
      />
      <textarea
        placeholder="Text"
        name="text"
        value={text}
        onChange={onChange}
        rows="5"
        cols="10"
      ></textarea>
      <div>
        <input
          type="submit"
          value="Add Note"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default NotesForm;
