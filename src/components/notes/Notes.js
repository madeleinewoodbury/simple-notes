import React, { useState, Fragment } from 'react';
import NotesItem from './NotesItem';

const Notes = () => {
  const [notes, setNotes] = useState([
    {
      _id: 1,
      title: 'Note 1',
      text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero possimus tempore, obcaecati pariatur dignissimos cupiditate quidem eveniet explicabo non ex.',
    },
    {
      _id: 2,
      title: 'Note 2',
      text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero possimus tempore, obcaecati pariatur dignissimos cupiditate quidem eveniet explicabo non ex.',
    },
    {
      _id: 3,
      title: 'Note 3',
      text:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero possimus tempore, obcaecati pariatur dignissimos cupiditate quidem eveniet explicabo non ex.',
    },
  ]);
  return (
    <Fragment>
      {notes.map((note) => (
        <NotesItem key={note._id} note={note} />
      ))}
    </Fragment>
  );
};

export default Notes;
