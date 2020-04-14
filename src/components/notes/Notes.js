import React, { useContext, useEffect, Fragment } from 'react';
import NoteContext from '../../context/note/noteContext';
import NotesItem from './NotesItem';

const Notes = () => {
  const noteContext = useContext(NoteContext);
  const { notes, filtered, getNotes, loading } = noteContext;

  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  if (notes.length === 0 && !loading) {
    return <h4>Please add a note</h4>;
  }

  return (
    <Fragment>
      {notes !== null && !loading ? (
        <Fragment>
          {filtered !== null
            ? filtered.map((note) => <NotesItem key={note._id} note={note} />)
            : notes.map((note) => <NotesItem key={note._id} note={note} />)}
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default Notes;
