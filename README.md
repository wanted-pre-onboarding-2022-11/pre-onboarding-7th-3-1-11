### 사용자가 입력한 텍스트와 일치하는 부분 볼드처리

1.  정규식을 이용해 사용자가 입력한 텍스트 앞,뒤로 flag를 넣어준다.
2.  해당 flag를 기준으로 split 한다. split 할때 두번째 인자인 limit을 3개로 지정하여 나온 값의 가운데 값이 해당 keyword로 볼드 처리한다.

### API 호출 최적화

- 로컬 캐싱
  API class, Cache class를 만들어 API 인스턴스 생성 시 Cache를 의존성으로 주입 받는다.
  API 내부변수인 cache에는 set, get 함수가 구현되어 있고 API 호출을 진행하면

  - 1. Cache에 해당하는 key 값이 있는지 확인한다
  - 2. Cache에 해당하는 값이 있다면 해당 값을 사용한다
  - 3. Cache에 해당하는 값이 없다면 API 호출 후 Cache에 해당 key 값으로 value를 저장한다.

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
  useDebounce를 구현하여 delay 시간동안 계속 되는 입력은 요청을 보내지 않고 마지막 입력후에 fetch요청을 보내도록 구현.

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

### 키보드만으로 추천 검색어들로 이동 가능하도록 구현

- index 값을 state로 만들어서 키보드 이벤트 마다 해당 index를 이동 시켰다.

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
