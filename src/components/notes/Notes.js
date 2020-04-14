import React, { useContext, useEffect, Fragment } from 'react';
import NoteContext from '../../context/note/noteContext';
import NotesItem from './NotesItem';

const Notes = () => {
  const noteContext = useContext(NoteContext);
  const { notes, filtered, getNotes, loading } = noteContext;

  useEffect(() => {
    getNotes();

    // eslint-disable-next-line
  }, [loading]);

  return (
    <Fragment>
      {notes !== null && !loading ? (
        <Fragment>
          {filtered !== null
            ? filtered.map((note) => <NotesItem key={note._id} note={note} />)
            : notes.map((note) => <NotesItem key={note._id} note={note} />)}
        </Fragment>
      ) : (
        <p>Please add a note</p>
      )}
    </Fragment>
  );
};

export default Notes;
