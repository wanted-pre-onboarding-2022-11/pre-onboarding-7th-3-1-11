import React from "react";
import styled, { css } from "styled-components";

interface IProps {
  isOpen: boolean;
  dropRef: React.RefObject<HTMLInputElement>;
  handleClick: () => void;
  searchQuery: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form = ({ isOpen, dropRef, handleClick, searchQuery, handleOnChange }: IProps) => {
  return (
    <S.Form isOpen={isOpen}>
      <span>🔎</span>
      <input
        type="text"
        value={searchQuery}
        placeholder={isOpen ? "" : "질환명을 입력해 주세요."}
        onChange={handleOnChange}
        onClick={handleClick}
        ref={dropRef}
      />
      <button type="submit">검색</button>
    </S.Form>
  );
};

const S = {
  Form: styled.form<{ isOpen: boolean }>`
    display: grid;
    grid-template-columns: 1px auto 48px;
    align-items: center;
    gap: 20px;

    box-sizing: border-box;
    width: 490px;
    height: 74px;
    padding: 0 8px 0 25px;
    background-color: #fff;

    border-radius: 999px;

    ${(props) =>
      props.isOpen &&
      css`
        border: 2px solid #007be9;
        padding: 0 6px 0 23px;
      `}

    input {
      width: 100%;
      border: none;

      font-size: 18px;

      &:focus {
        outline: none;
      }
    }

    button {
      width: 48px;
      height: 48px;
      background-color: #007be9;

      border-radius: 50%;

      color: #fff;
      font-weight: 700;
    }
  `,
};

export default Form;
