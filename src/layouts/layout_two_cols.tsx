import React, { ReactNode } from 'react';
import { NavLink } from "react-router-dom";
import '../global.css'

export interface Props {
    columnOne: React.ReactElement;
    columnTwo: React.ReactElement;
  }
  
const layout_two_cols: React.FC<Props> = (props) => { 
    return (
        <div className="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
            {props.columnOne} 
        <main role="main" className="w-full h-full overflow-y-auto flex-grow flex-wrap px-5 sm:py-2 md:py-5 lg:py-10 justify-center items-center">
            {props.columnTwo}
        </main>
        </div>
    )
}
export default layout_two_cols;