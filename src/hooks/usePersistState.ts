import { Dispatch, SetStateAction, useEffect, useState } from "react";

const usePersistState = <T>(
  defaultValue: string,
  key: string
): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    const persistedValue = window.localStorage.getItem(key);
    return persistedValue !== null ? JSON.parse(persistedValue) : defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
};

export default usePersistState;
