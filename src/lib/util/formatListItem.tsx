import React from "react";

// 입력한 텍스트와 일치하는 부분은 볼드처리 <strong>

export const formatListItem = (text: string, inputValue: string): JSX.Element => {
  const regex = new RegExp(`(${inputValue})`, "gi");
  return (
    <>
      {text.split(regex).map((word, idx) => {
        return word === inputValue ? <strong key={idx}>{word}</strong> : word;
      })}
    </>
  );
};
