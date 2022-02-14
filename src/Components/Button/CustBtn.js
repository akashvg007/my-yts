import React from "react";
import "./CustBtn.css";
import Btn from "@mui/material/Button";

export const Button = ({ btns }) => {
  return (
    <div className="container">
      {btns.map((b) => {
        const {
          variant = "contained",
          color = "success",
          text = b.quality,
          magnet_url,
          hash,
        } = b;
        return (
          <Btn
            key={hash}
            variant={variant}
            size="small"
            href={magnet_url}
            color={color}
          >
            {text}
          </Btn>
        );
      })}
    </div>
  );
};
