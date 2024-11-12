import React from "react";

const Textarea = (Type) => {
  const { name, children, placeholder } = Type;
  return (
    <textarea
      className="text-black"
      name={name}
      id=""
      placeholder={placeholder}
    >
      {children}
    </textarea>
  );
};

export default Textarea;
