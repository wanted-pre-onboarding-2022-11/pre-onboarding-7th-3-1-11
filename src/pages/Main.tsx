import React from "react";
import { useAppSelector } from "@/app/hooks";
import Dropdown from "@/components/Dropdown";
import Form from "@/components/Form";
import useDropdown from "@/hooks/useDropdown";
import useGetList from "@/hooks/useGetList";
import styled from "styled-components";

const Main = () => {
  const { data } = useAppSelector((state) => state.sick);
  const { isOpen, dropRef, handleClick } = useDropdown();
  const { searchQuery, handleOnChange } = useGetList();

  return (
    <S.Container>
      <S.Title>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </S.Title>

      <Form
        isOpen={isOpen}
        dropRef={dropRef}
        handleClick={handleClick}
        searchQuery={searchQuery}
        handleOnChange={handleOnChange}
      />

      {isOpen && <Dropdown data={data} searchQuery={searchQuery} />}
    </S.Container>
  );
};

const S = {
  Container: styled.main`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;

    width: 100%;
    height: 460px;
    background-color: #cae9ff;
  `,

  Title: styled.h1`
    font-size: 34px;
    font-weight: 700;
    line-height: 54px;
    text-align: center;
  `,
};

export default Main;
