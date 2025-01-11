import React from "react";
import { ways } from "../../data.js";
import WayToTeach from "./WayToTeach/WayToTeach.jsx";

export const InfoSection = () => {
  return (
    <section>
      <ul>
          {ways.map((way) => (
            <WayToTeach key={way.desc} {...way} />
          ))}
      </ul>
    </section>
  );
};
