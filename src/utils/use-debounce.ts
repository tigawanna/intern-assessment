import * as React from "react";

export function useDebounce<T>(
  value: T,
  delay?: number
): {
  debouncedValue: T;
  isDebouncing: boolean;
} {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);
  const [isDebouncing, setIsDebouncing] = React.useState(false);
  React.useEffect(() => {
    setIsDebouncing(true);
    const timer = setTimeout(() => {
      setDebouncedValue(value);
      setIsDebouncing(false);
    }, delay ?? 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return { debouncedValue, isDebouncing };
}
