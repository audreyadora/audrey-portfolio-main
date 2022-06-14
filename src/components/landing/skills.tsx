import React, { ReactNode } from 'react';
import { NavLink } from "react-router-dom";
import '../../global.css'

export interface Props {
  }
  
const project: React.FC<Props> = (props) => { 
    return (
     <div>
        <div className="card lg:card-side bg-slate-50">
            <div className="">
            <div className="card-body flex flex-row">
               <div className="badge badge-outline badge-lg">skills</div>
               <div className="badge badge-primary badge-outline badge-lg">skills</div>
               <div className="badge badge-secondary badge-outline badge-lg">skills</div>
               <div className="badge badge-accent badge-outline badge-lg">skills</div>
            </div>
            </div>
        </div>
      </div>
    )
}
export default project;