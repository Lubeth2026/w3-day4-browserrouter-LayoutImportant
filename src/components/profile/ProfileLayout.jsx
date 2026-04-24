import React from "react";
import { Link, Outlet } from "react-router";


export default function ProfileLayout() {
  return (
    <div>
      <h1>Profile</h1>
      <nav className='flex'>
        <Link to="/profile">Overview</Link>
        <Link to="/profile/settings">Settings</Link>
      </nav>

      <Outlet />
    </div>
  );
}