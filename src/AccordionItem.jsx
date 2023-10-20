import { useState } from "react";

const AccordionItem = ({ num, title, text,curOpen, onOpen }) => {
 const isOpen = num === curOpen

  const handleToggle = () => {
    // setIsOpen((isOpen) => !isOpen);
    onOpen(num)
  };

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
};

export default AccordionItem;
