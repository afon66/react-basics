import { useState } from "react";
import { differences } from "../../data.js";
import Button from "../Common/Button/Button.jsx";

export const ButtonSection = () => {
  const { way, easy, program } = differences;
  const [content, setContent] = useState(way);

  function handleClick(type) {
    setContent(type);
  }

  return (
    <section>
      <h2>Чем мы отличаемся от других</h2>
      <Button
        onClick={() => handleClick(way)}
        name="button 1"
        isActive={content === way}
      >
        Way
      </Button>
      <Button
        onClick={() => handleClick(easy)}
        name="button 2"
        isActive={content === easy}
      >
        Accessibility
      </Button>
      <Button
        onClick={() => handleClick(program)}
        name="button 3"
        isActive={content === program}
      >
        Concentration
      </Button>
      {content && <div>{content}</div>}
    </section>
  );
};
