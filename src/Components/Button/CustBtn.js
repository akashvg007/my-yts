import React from "react";
import "./CustBtn.css";
import Btn from "@mui/material/Button";

export const Button = ({ btns, mode = 0 }) => {
  return (
    <div className="container">
      {btns.map((b) => {
        const {
          variant = "contained",
          color = "success",
          text = b.quality,
          magnet_url,
          type,
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
            {mode == 1 && " " + type}
          </Btn>
        );
      })}
    </div>
  );
};
