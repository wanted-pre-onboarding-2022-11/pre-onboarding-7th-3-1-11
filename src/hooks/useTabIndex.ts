import { useCallback, useState } from "react";

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
