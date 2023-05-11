import { useState, useCallback, useEffect } from 'react';

export default function useApi<R>(
  method: (...args: any[]) => Promise<R>,
  ...parameters: Parameters<typeof method>
) {
  const [data, setData] = useState<R>();
  const request = useCallback(() => {
    method(...parameters).then(setData);
  }, [method, parameters]);
  useEffect(() => {
    request();
  }, [request]);
  return {
    data,
  };
}
