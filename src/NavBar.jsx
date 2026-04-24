
import React from 'react'
import { Link } from 'react-router';

export default function NavBar() {
  return (
    <nav className='flex'>
      <Link to="/">Home</Link>
      <Link to="/sales">Sales</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
