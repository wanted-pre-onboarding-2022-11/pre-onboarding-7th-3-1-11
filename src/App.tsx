import React, { ChangeEvent, useState } from "react";

function App() {
  const [keyword, setKeyword] = useState("");

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  return (
    <>
      <h1>국내 모든 임상시험 검색하고 온라인으로 참여하기</h1>
      <input
        name="keyword"
        placeholder="질환명을 입력해 주세요."
        value={keyword}
        onChange={handleChangeKeyword}
        autoComplete="off"
      />
    </>
  );
}

export default App;
