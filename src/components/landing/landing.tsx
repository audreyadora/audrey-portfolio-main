import React, { ReactNode } from 'react';
import { NavLink } from "react-router-dom";
import '../../global.css'
import About from './about';
import Skills from './skills'
import Projects_Carousel from './projects_carousel';
import Contact from './contact';
import ContentPane from '../contentpane';

import {Props} from '../contentpane'
  
const landing: React.FC<Props> = (props) => {
    return (
      <ContentPane
        cardOne={<About />}
        cardTwo={<Skills />}
        cardThree={<Projects_Carousel />}
        cardFour={<Contact />}
      />
    )};
export default landing;