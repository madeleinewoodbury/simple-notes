import React from 'react';
import Notes from '../notes/Notes';
import NotesForm from '../notes/NotesForm';
import NotesFilter from '../notes/NotesFilter';

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <NotesForm />
      </div>
      <div>
        <NotesFilter />
        <Notes />
      </div>
    </div>
  );
};

export default Home;
