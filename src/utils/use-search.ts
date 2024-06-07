import { useDebounce } from "./use-debounce";
import React from "react";
export function useDebouncedSearch() {
  const [keyword, setKeyword] = React.useState("");
  const { debouncedValue, isDebouncing } = useDebounce(keyword, 500);
  return {
    debouncedValue,
    isDebouncing,
    keyword,
    setKeyword,
  };
}
