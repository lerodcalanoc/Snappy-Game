/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./MarvelCard.css";

const MarvelCard = props => (
  <div className="card">
    <div className="img-container">
      <a
        onClick={() => props.selectAvenger(props.character)}
        className={
          props.curScore === 0
            ? "style_prevu_kit style_prevu_kit_ex"
            : "style_prevu_kit"
        }
      >
        <img alt={props.character} src={props.image} />
      </a>
    </div>
  </div>
);

export default MarvelCard;
