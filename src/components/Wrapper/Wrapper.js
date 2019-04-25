import React from "react";
import "./Wrapper.css";
import Background from './avenger.jpg'

 const background = {
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      overflow: 'hidden',
      
         
    };

const Wrapper = props => <div style={background} className="wrapper">{props.children}</div>;

export default Wrapper;