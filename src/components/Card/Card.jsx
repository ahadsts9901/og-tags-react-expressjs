import React, { useState } from "react";
import "./Card.css";
import { BoxArrowInUpRight, Cart4, Clipboard } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

const Card = (props) => {

  const [isCopy, setIscopy] = useState("Copy")
  const navigate = useNavigate()

  let editedDesc = props.description.split(" ").slice(0, 15).join(" ");

  const copy = () => {

    let url = window.location.origin + "/" + props.id;
    navigator.clipboard.writeText(url)
    setIscopy("Copied")

    setTimeout(() => {
      setIscopy("Copy")
    }, [1000])

  }

  return (
    <div className="card" style={{ width: "10rem" }}>
      <img
        className="cardImg card-img-top"
        src={props.image}
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{editedDesc}</p>
        <div className="buttonCont">
          <a className="cardButton btn btn-primary" onClick={() => {
            navigate("/" + props.id)
          }}>
            <BoxArrowInUpRight /> View
          </a>
          <a className="cardButton btn btn-primary" onClick={copy}>
            <Clipboard /> {isCopy}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
