import React from "react";

interface Props {
  children: string;
  buttonType: string;
  onClick: () => void;
}

const Button = ({ children, buttonType, onClick }: Props) => {
  return (
    <button className={"btn btn-" + buttonType} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
