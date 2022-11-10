# 원티드 프리온보딩 프론트엔드 11조

### [배포 사이트 바로가기](https://comforting-boba-46636f.netlify.app/) 👈🏻 click!

1. [팀 소개](#팀-소개)
   - 팀원 소개
   - 소통 방식과 과제 진행 방식
2. [프로젝트 소개](#프로젝트-소개)
   - 프로젝트 구조
   - 폴더 구조
3. [우리 팀의 Best Practice](#우리-팀의-best-practice)

---

## 팀 소개

👋 안녕하세요, 원티드 프리온보딩 프론트엔드 11조입니다!

### 팀원 소개

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/97172050?v=4" width="100px;" alt="김영진"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/111304551?v=4" width="100px;" alt="심유선"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/34249911?v=4" width="100px;" alt="김수민"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/64957267?v=4" width="100px;" alt="용상윤"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/80934175?v=4" width="100px;" alt="박채연"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/61973070?v=4" width="100px;" alt="박민주"/>
    </td>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/u/104333720?v=4" width="100px;" alt="정연우"/>
    </td>
  </tr>
  <tr>    
    <td align="center">
      <a href="https://github.com/devyouth94">
        <div>김영진</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/SimYuseon">
        <div>심유선</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/hemudi">
        <div>김수민</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ryong9rrr">
        <div>용상윤(팀장)</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/chaechae66">
        <div>박채연</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/6mn12j">
        <div>박민주</div>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/0SCAR0421">
        <div>정연우</div>
      </a>
    </td>
  </tr>
</table>

### 소통 방식과 과제 진행 방식

저희 팀은 소통 방식으로 디스코드와 노션을 활용했습니다. 디스코드에서 어떤 방식이 더 나을지 투표를 하거나 어떤 코드가 좋은 코드일지 토론을 하였습니다.

토론 후 전체적인 과제 진행은 팀장이 진행하였습니다. 그리고 1명이 대표로 라이브코딩을 하고 1명이 회의록을 작성하였습니다. 나머지 팀원들은 라이브코딩에 모두 참여하여 네이밍 컨벤션이나 코드 구조 등에 대해 피드백을 주고 받으며 Best Practice를 찾기 위해 노력했습니다.

---

### 실행방법

1. 이 저장소를 클론해주세요. `git clone ...`

2. 의존성 모듈을 설치해주세요. `npm install`

3. 실행해주세요. `npm start`

### 프로젝트 소개

- 질환명 검색시 API 호출 통해 검색어를 추천해주는 페이지입니다.

### 폴더 구조

<details>
<summary>폴더 구조</summary>
<div markdown="1">

```
📦src
 ┣ 📂api
 ┃ ┣ 📜SearchAPI.ts
 ┃ ┗ 📜createInstance.ts
 ┣ 📂components
 ┃ ┗ 📂Search
 ┃ ┃ ┣ 📜AutoCompleList.tsx
 ┃ ┃ ┣ 📜AutoCompleteItem.tsx
 ┃ ┃ ┗ 📜Search.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useDebounce.ts
 ┃ ┣ 📜useInput.ts
 ┃ ┗ 📜useTabIndex.ts
 ┣ 📂service
 ┃ ┗ 📜CacheService.ts
 ┣ 📂utils
 ┃ ┗ 📜format.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜types.ts

```

</div>
</details>

---

## 우리 팀의 Best-Practice

### 1. 사용자가 입력한 텍스트와 일치하는 부분 볼드처리

1.  정규식을 이용해 사용자가 입력한 텍스트 앞,뒤로 flag를 넣어준다.
2.  해당 flag를 기준으로 split 한다.(두번째 인자인 limit을 3개로 지정) split 할때 나온 값의 가운데 값이 해당 keyword로 볼드 처리한다.

```javascript
export const boldFlagMaker = ({ key, item }: { key: string, item: string }) => {
  return item.replace(new RegExp(key, "i"), `${SPLIT_FLAG}${key}${SPLIT_FLAG}`);
};

export const formatToBold = ({ list, key }: { list: SickInfoTypes[], key: string }) => {
  const boldList = list.map((item) => boldFlagMaker({ key, item: item.sickNm }));
  return boldList.map((boldStr) => {
    return boldStr.split(SPLIT_FLAG, 3);
  });
};

//컴포넌트에서 사용 시
const [splitedLeftText, boldText, splitedRightText] = item;
return (
  <StyledAutoItem isSelected={isSelected}>
    <p>
      {splitedLeftText}
      <b>{boldText}</b>
      {splitedRightText}
    </p>
  </StyledAutoItem>
);
```

### 2. API 호출 최적화(캐싱기능)

- 로컬 캐싱

  API class, Cache class를 만들어 API 인스턴스 생성 시 baseURL과 Cache를 의존성으로 주입 받습니다. Cache를 다른 방법을 이용하여 관리할 수도 있기때문에 관리하기 용이하게 해당 부분은 의존성을 주입 받게 구현 하였습니다.

  ```javascript
  const cahceInstace = new CacheService();
  export const searchAPI = new SearchAPI("http://localhost:4000/", cahceInstace);
  ```

  API 내부변수인 cache에는 set, get 함수가 구현되어 있고 API 호출을 진행하면

  - 1. Cache에 해당하는 key 값이 있는지 확인한다
  - 2. Cache에 해당하는 값이 있다면 해당 값을 사용한다
  - 3. Cache에 해당하는 값이 없다면 API 호출 후 Cache에 해당 key 값으로 value를 저장한다.

- Cache class 내부에는 Map 객체를 이용하여 key값을 기준으로 캐싱된 데이터를 저장 합니다.

  **Map 객체를 사용한 이유?**

  - 데이터 정보 조회가 빈번할때는 Map 객체가 순서가 보장 되기 때문에 데이터 조회 시 Object보다 Map 이 더 나은 성능을 갖는다.
  - has, set, get 등 이미 구현되어 있는 함수를 이용해 key를 기준으로 값을 쉽게 가져올 수 있다.

```javascript

import type { SickInfoTypes } from "@/types";

export class CacheService {
  private cache;
  constructor() {
    this.cache = new Map<string, SickInfoTypes[]>();
  }

  setCache(key: string, value: SickInfoTypes[]) {
    this.cache.set(key, value);
  }
  getCache(key: string) {
    return this.cache.get(key);
  }
}

...
//API class
async getKeyword(keyword: string) {
    if (this.cache.getCache(keyword)) {
      const data = this.cache.getCache(keyword);
      return data;
    } else {
      const { data } = await this.instance.get<SickInfoTypes[]>("/sick", {
        params: {
          sickNm_like: keyword,
        },
      });
      this.cache.setCache(keyword, data);
      return data;
    }
  }
  ...
```

- 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

  useDebounce를 구현하여 delay 시간동안 계속 되는 입력은 요청을 보내지 않고 마지막 입력후에 debounceValue를 변경하여 fetch요청을 보내도록 구현하였습니다.

```javascript
useEffect(() => {
  const fetchAutoComplete = async (keyword: string) => {
    const data = await searchAPI.getKeyword(keyword);
    setAutoCompleteItems(data ?? []);
  };
  if (debounceValue) {
    fetchAutoComplete(debounceValue);
  } else setAutoCompleteItems([]);
}, [debounceValue]);
```

### 3.키보드만으로 추천 검색어들로 이동 가능하도록 구현

- index 값을 state로 만들어서 키보드 이벤트 마다 해당 index를 이동 시켰습니다.

```javascript
useEffect(() => {
  window.addEventListener("keydown", handleKeyTabIndex);
  return () => window.removeEventListener("keydown", handleKeyTabIndex);
});

//useTabIndex
export const useTabIndex = (length: number) => {
  const [tabIndex, setTabIndex] = useState(0);

  const initTabIndex = useCallback(() => setTabIndex(0), []);

  const handleKeyTabIndex = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          setTabIndex((prev) => {
            if (prev === length - 1) return 0;
            else return prev + 1;
          });
          break;
        case "ArrowUp":
          setTabIndex((prev) => {
            if (prev === 0) return length - 1;
            else return prev - 1;
          });
          break;
      }
    },
    [length],
  );

  return { tabIndex, initTabIndex, handleKeyTabIndex };
};
```
