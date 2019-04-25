import React from "react";
import "./Navpills.css";

const Navpills = props => (
    <div>
        <ul className="nav nav-pills nav-justified">
            <li><a href="/"><a href="https://fontmeme.com/fonts/avengeance-heroic-avenger-font/"><img src="https://fontmeme.com/permalink/190425/f59c0fe66ddbed861e58aad96ab94a58.png" alt="avengeance-heroic-avenger-font" border="0"></img></a></a></li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Score: <span style={{color: "#ef0404"}}>{props.curScore}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
);

export default Navpills;