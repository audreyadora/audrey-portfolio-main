import React, { ReactNode } from 'react';
import { NavLink } from "react-router-dom";
import '../../global.css'

export interface Props {
  }
  
const about: React.FC<Props> = (props) => { 
    return (
      <div>
        <div className="card lg:card-side bg-slate-50">
        <div className="card-body">
          <h2 className="card-title text-xl font-mono text-red-500">&lt;interdisciplinary avant-garde in creative analysis and data communication&gt;"</h2>
        </div>
      </div>
      </div>
      )
}
export default about;
