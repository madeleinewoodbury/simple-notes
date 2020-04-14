import React, { useRef, useEffect, useContext } from 'react';
import NoteContext from '../../context/note/noteContext';

const NotesFilter = () => {
  const noteContext = useContext(NoteContext);
  const text = useRef('');
  const { filterNotes, clearFilter, filtered } = noteContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterNotes(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form className="my-1">
      <input
        ref={text}
        type="text"
        placeholder="Filter Notes..."
        onChange={onChange}
      />
    </form>
  );
};

export default NotesFilter;
