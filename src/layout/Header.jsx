import React from 'react';
import { Link } from 'react-router-dom'; 
import { useDispatch } from 'react-redux'; 

const Header = () => { 
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch({ type: 'SIGN_OUT' });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Student Management</Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/students">Student List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-student">Add Student</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">User Profile</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-danger nav-link" onClick={handleSignOut}>Sign Out</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;  
