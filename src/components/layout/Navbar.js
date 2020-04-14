import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import NoteContext from '../../context/note/noteContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const noteContext = useContext(NoteContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;
  const { clearNotes } = noteContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
    clearNotes();
  };

  const authLinks = (
    <Fragment>
      <li style={{ marginRight: '10px', fontSize: '1.3rem' }}>
        Hello {user && user.name.split(' ')[0]}
      </li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <nav className="navbar bg-primary">
      <Link to="/">
        <i className="far fa-sticky-note"></i> simple-notes
      </Link>

      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </nav>
  );
};

export default Navbar;
