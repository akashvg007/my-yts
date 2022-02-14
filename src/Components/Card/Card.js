import React from "react";
import "./Card.css";
import { Button } from "../Button/CustBtn";

export const Card = ({ movie, select }) => {
  const { title, year, torrents, medium_cover_image } = movie;
  const myStyle = () => {
    return {
      backgroundImage: `url(${medium_cover_image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "auto auto",
    };
  };
  return (
    <section className="card-section" onClick={() => select(movie)}>
      <div className="img-container" style={myStyle()}>
        {/* <div>{title}</div> */}
      </div>
      <Button btns={torrents.slice(0, 2)} />
    </section>
  );
};
