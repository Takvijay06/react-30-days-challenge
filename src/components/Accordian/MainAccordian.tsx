import { useState } from "react";
import { accordianStyle, contentStyle, titleStyle } from "./styles";
import type { IAccordian } from "./interface";

export const MainAccordian = (props: IAccordian) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div style={accordianStyle}>
      <div style={titleStyle} onClick={() => setIsOpen((prev) => !prev)}>
        {props.title}
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div style={contentStyle}>{props.content}</div>}
    </div>
  );
};
