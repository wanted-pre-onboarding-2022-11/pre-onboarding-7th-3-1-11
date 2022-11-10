import React from "react";
import styled from "styled-components";

const boldQuery = (text: string, query: string) => {
  if (query && text.includes(query)) {
    const parts = text.split(new RegExp(`(${query})`, "gi"));

    return (
      <>{parts.map((part, index) => (part === query ? <Bold key={index}>{part}</Bold> : part))}</>
    );
  }

  return text;
};

const Bold = styled.span`
  font-weight: 700;
`;

export { boldQuery };
