import React, { useState } from "react";
import "./_dropdown.scss";

export default function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderContent = () => {
    if (Array.isArray(content)) {
      return content.map((item, index) => <p className="dropdown__content--li" key={index}>{item}</p>);
    } else {
      return <p className="dropdown__content--p">{content}</p>;
    }
  };

  return (
    <div className="dropdown">
      <button className="dropdown__title" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      {isOpen && <div className="dropdown__content">{renderContent()}</div>}
    </div>
  );
}