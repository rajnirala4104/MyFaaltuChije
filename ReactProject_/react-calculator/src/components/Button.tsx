import React from "react";

interface Prop {
  value: string;
  customClassName: string;
}

export const Button = ({ value, customClassName }: Prop) => {
  return <span className={`${customClassName}`}>{value}</span>;
};
