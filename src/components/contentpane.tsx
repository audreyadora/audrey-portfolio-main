import React, { ReactNode } from 'react';
import { NavLink } from "react-router-dom";
import '../global.css'

export interface Props {
    cardOne?: React.ReactNode;
    cardTwo?: React.ReactNode;
    cardThree?: React.ReactNode;
    cardFour?: React.ReactNode;
    cardFive?: React.ReactNode;
    cardSix?: React.ReactNode;
    cardSeven?: React.ReactNode;
    cardEight?: React.ReactNode;
}
const ContentPane: React.FC<Props> = (props) => { 

    return (
        <div>
            
            <div className="mockup-window shadow-md bg-slate-50" data-theme="valentine">
                <div className="flex justify-center px-4 py-16 bg-base-200">
                    {props.cardOne}
                </div>
            </div>
            <br></br>
            <div className="mockup-window shadow-md bg-slate-50" data-theme="valentine">
                <div className="flex justify-center px-4 py-16 bg-base-200">
                    {props.cardTwo}
                </div>
            </div>
            <br></br>
            <div className="mockup-window shadow-md bg-slate-50" data-theme="valentine">
                <div className="flex justify-center px-4 py-16 bg-base-200">  
                    {props.cardThree}
                </div>
            </div>
            <br></br>
            <div className="mockup-window shadow-md  bg-slate-50" data-theme="valentine">
                <div className="flex justify-center px-4 py-16 bg-base-200"> 
                    {props.cardFour}
                </div>
            </div>
            
            <br></br>
        </div>
    )
}
export default ContentPane;