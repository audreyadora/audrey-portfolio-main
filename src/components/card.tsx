import React, { ReactNode } from 'react';
import { NavLink } from "react-router-dom";
import '../global.css'

export interface Props {
    child?: React.ReactElement;
  }
  
const Card: React.FC<Props> = (props) => { 
    return (
      <div className="flex justify-center px-4 py-16 bg-base-200">
          <div className="card lg:card-side bg-slate-50">
            <div className="card-body">
                {props.child}
            </div>
          </div>
        </div>
    )
}
export default Card;