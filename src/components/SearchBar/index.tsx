import styled from "styled-components";
import { ChangeEventHandler } from "react";

interface SearchBarProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBar = ({ onChange }: SearchBarProps) => {
  return (
    <S.Form>
      <S.Input onChange={onChange} />
      <S.Button>검색</S.Button>
    </S.Form>
  );
};

const S = {
  Form: styled.form`
    display: flex;
    width: 500px;
  `,
  Input: styled.input``,
  Button: styled.button``,
};

export default SearchBar;
