import React from "react";

interface TextProps {
  text: string;
  keyword?: string;
}

const Text = ({ text, keyword = "" }: TextProps) => {
  if (keyword === "" || !text.includes(keyword)) {
    return <span>{text}</span>;
  }

  const parts = text.split(new RegExp(`(${keyword})`, "g"));
  return (
    <span>{parts.map((part, index) => (part === keyword ? <b key={index}>{part}</b> : part))}</span>
  );
};

export default Text;
