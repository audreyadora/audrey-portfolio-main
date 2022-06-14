import React from "react";
import { NavLink } from "react-router-dom";
import '../global.css'
function Navigation() {
  return (
    <div className="sm:w-1/3 md:1/4 w-full flex-shrink flex-grow-0 p-4">
        <div className="sticky overscroll-none top-0 p-4 w-full">
          <ul className="sticky flex sm:flex-col md:fixed content-center justify-between">
                <li className="py-2 hover:bg-indigo-300 rounded">
                    <NavLink className="nav-link" to="/">
                        <a className="truncate" href="#">
                            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/waving-hand_1f44b.png" className="w-7 sm:mx-2 mx-4 inline" />
                            <span className="hidden sm:inline">Welcome!</span>
                        </a>
                    </NavLink>
                </li>
                <li className="py-2 hover:bg-indigo-300 rounded">
                    <NavLink className="nav-link" to="/">
                        <a className="truncate" href="#">
                            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/unicorn_1f984.png" className="w-7 sm:mx-2 mx-4 inline" /> 
                            <span className="hidden sm:inline">About</span>
                        </a>
                    </NavLink>
                </li>
                <li className="py-2 hover:bg-indigo-300 rounded">
                    <NavLink className="nav-link" to="/">
                        <a className="" href="#">
                            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/desktop-computer_1f5a5-fe0f.png" className="w-7 sm:mx-2 mx-4 inline" /> 
                            <span className="hidden sm:inline">Projects</span>
                        </a>
                    </NavLink>
                </li>
                <li className="py-2 hover:bg-indigo-300 rounded">
                    <NavLink className="nav-link" to="/">
                        <a className="" href="#">
                            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/325/love-letter_1f48c.png" className="w-7 sm:mx-2 mx-4 inline" /> 
                            <span className="hidden sm:inline">Contact</span>
                        </a>
                    </NavLink>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Navigation;