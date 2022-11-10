import { useEffect, useState } from "react";
import { clearData, getCache, __getSickList } from "@/app/slices/sickSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

const useGetList = () => {
  const dispatch = useAppDispatch();
  const { cache } = useAppSelector((state) => state.sick);

  const [searchQuery, setSearchQuery] = useState("");

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (!searchQuery) {
      dispatch(clearData());
      return;
    }

    const debounce = setTimeout(() => {
      if (cache[searchQuery]) {
        dispatch(getCache(searchQuery));
      } else {
        dispatch(__getSickList(searchQuery));
      }
    }, 500);

    return () => clearTimeout(debounce);
  }, [searchQuery]);

  return { searchQuery, handleOnChange };
};

export default useGetList;
