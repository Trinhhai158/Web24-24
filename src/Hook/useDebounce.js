import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handel = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handel);
  }, [value]);
  return debouncedValue;
}

export default useDebounce;
