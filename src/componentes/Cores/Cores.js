import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { ColorPicker } from "../ColorPicker/ColorPicker";

import "./Cores.css";

export const Cores = () => {
  const [cfg, setCfg] = useState({
    color1: "#6E17C4",
    color2: "#E75590",
    position: 360,
    position2: "to left",
    background: "linear-gradient(360deg, #E75590, #132126)",
  });

  useEffect(() => {
    cfg.position
      ? setCfg((prevState) => ({
          ...prevState,
          background: `linear-gradient(${cfg.position}deg, ${cfg.color1}, ${cfg.color2})`,
        }))
      : setCfg((prevState) => ({
          ...prevState,
          background: `linear-gradient(${cfg.position2}, ${cfg.color1}, ${cfg.color2})`,
        }));
  }, [cfg.position, cfg.position2, cfg.color1, cfg.color2]);

  const buttons = [
    {
      text: "Left",
      value: "to left",
    },
    {
      text: "Bottom",
      value: "to bottom",
    },
    {
      text: "Right",
      value: "to right",
    },
    {
      text: "Top",
      value: "to top",
    },
  ];
  return (
    <div className="containerPrincipal">
      <h1
        className="titulo"
        style={{
          backgroundImage: `${cfg.background}`,
        }}
      >
        Gradient Generator
      </h1>
      <p
        style={{
          background: `${cfg.background}`,
        }}
        className="setGradient"
      ></p>

      <div className="botoes">
        {buttons.map((button, index) => (
          <Button
            key={index}
            texto={button.text}
            onClick={() => {
              setCfg((prevState) => ({ ...prevState, position: null }));
              setCfg((prevState) => ({
                ...prevState,
                position2: button.value,
              }));
            }}
          />
        ))}
      </div>
      <div className="containerCores">
        <div className="cores1">
          <span>First Color</span>
          <ColorPicker
            value="#6E17C4"
            onChange={(e) => {
              setCfg((prevState) => ({
                ...prevState,
                color1: `${e.target.value}`,
              }));
            }}
          />
        </div>
        <div className="range">
          <p>deg: {cfg.position}°</p>
          <input
            type="range"
            min="0"
            max="360"
            onChange={(e) => {
              setCfg((prevState) => ({
                ...prevState,
                position: e.target.value,
              }));
              setCfg((prevState) => ({ ...prevState, position2: null }));
            }}
          />
        </div>

        <div className="cores2">
          <span>Second Color</span>
          <ColorPicker
            value="#E75590"
            onChange={(e) => {
              setCfg((prevState) => ({
                ...prevState,
                color2: `${e.target.value}`,
              }));
            }}
          />
        </div>
      </div>
    </div>
  );
};