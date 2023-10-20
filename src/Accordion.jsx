import { useState } from "react";
import AccordionItem from "./AccordionItem";


const Accordion = ({ data }) => {
  const [curOpen, setIsOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          key={item.title}
          num={i}
          title={item.title}
          text={item.text}
          curOpen={curOpen}
          onOpen={setIsOpen}
        />
      ))}
    </div>
  );
};

export default Accordion;
