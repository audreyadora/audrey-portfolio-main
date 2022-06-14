import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './home'
import './global.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Projects,
  Posts,
  Post
} from "./components";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="" element={<Posts />} />
            <Route path=":postSlug" element={<Post />} />
          </Route>
        </Routes>
    </Router>
  </React.StrictMode>
)
