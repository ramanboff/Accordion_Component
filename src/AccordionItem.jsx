import { useState } from "react";

const AccordionItem = ({num, title, text}) => {

const [isOpen, setIsOpen] = useState(false)



  return (
    <div className="item" onClick={() => setIsOpen(!isOpen)}>
      <p className="number">{num<9? `0${num+1}`: num+1}</p>
      <p className="title">{title}</p>
      <p className="icon" >-</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
   );
}
 
export default AccordionItem;