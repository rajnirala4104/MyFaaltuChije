import React, { useState } from 'react';
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";


function Accordion() {
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionData = [
    {
      title: "What kind of careers does Suvira offer?",
      content:
        "We offer a wide range of opportunities in chemical engineering, research and development, manufacturing, quality control, safety and environmental management, sales, and corporate functions such as finance, HR, and IT.",
    },
    {
      title: "What kind of careers does Suvira offer?",
      content:
        "We offer a wide range of opportunities in chemical engineering, research and development, manufacturing, quality control, safety and environmental management, sales, and corporate functions such as finance, HR, and IT.",
    },
    {
      title: "What kind of careers does Suvira offer?",
      content:
        "We offer a wide range of opportunities in chemical engineering, research and development, manufacturing, quality control, safety and environmental management, sales, and corporate functions such as finance, HR, and IT.",
    },
  
  ];
  return (
    <div className="w-[90%] mx-auto p-4 ">
      {accordionData.map((item, index) => (
        <div key={index} className="mb-5">
          <button
            className={`accordion  bg-[#05A6F01A] w-full text-left p-4 text-[22px]   flex items-center justify-between text-[#05A6F0]`}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            { activeIndex === index ? <IoIosArrowUp />: <IoIosArrowDown />}
            
          </button>
          <div
            className={`panel ${
              activeIndex === index ? "block" : "hidden"
            }  p-4 rounded-md shadow-sm `}
          >
            <p className=' text-[#10100F] text-[22px]'>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Accordion