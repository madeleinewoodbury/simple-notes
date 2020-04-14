import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Notes from '../notes/Notes';
import NotesForm from '../notes/NotesForm';
import NotesFilter from '../notes/NotesFilter';

const Home = (props) => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (!isAuthenticated) {
      props.history.push('/login');
    }

    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

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
