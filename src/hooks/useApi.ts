import { useState, useEffect } from 'react';

export default function useApi<R>(request: Function) {
  const [data, setData] = useState<R>();
  useEffect(() => {
    request().then(setData);
  }, [request]);
  return {
    data,
  };
}
