import React from "react";
import { Outlet } from "react-router-dom";
import '../../global.css'
function projects() {
  return (
      <div className="container">
        <h1 className="text-center mt-5">Blog page</h1>
        <Outlet />
      </div>
  );
}

export default projects;