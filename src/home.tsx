import { useState } from 'react'
import logo from './assets/logo.svg'
import './global.css'
import { Props } from './components/card';
import { Navigation } from "./components";
import { Layout_Two_Cols } from "./layouts"
import { Landing } from './components/landing';

const home: React.FC<Props> = (props) => {
  return (
    <Layout_Two_Cols
      columnOne={<Navigation />}
      columnTwo={<Landing />}
    />
  )};
export default home
