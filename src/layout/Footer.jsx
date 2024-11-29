// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5 py-4">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h5 className="text-uppercase">Student Management System</h5>
            <p>
              A simple web application for managing student information.
            </p>
          </div>

          <div className="col-lg-6 col-md-12">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/students" className="text-dark">Student List</a>
              </li>
              <li>
                <a href="/add-student" className="text-dark">Add Student</a>
              </li>
              <li>
                <a href="/profile" className="text-dark">User Profile</a>
              </li>
              {/* Add more links if needed */}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-3 bg-dark text-white">
        <p>© {new Date().getFullYear()} Student Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
