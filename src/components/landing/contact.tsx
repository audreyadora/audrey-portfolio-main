import React, { ReactNode } from 'react';
import { NavLink } from "react-router-dom";
import '../../global.css'

export interface Props {
  }
  
const contact: React.FC<Props> = (props) => { 
    return (
      <h1 className='text-red-500 font-extrabold'>Contact Me</h1>
    )
}
export default contact;