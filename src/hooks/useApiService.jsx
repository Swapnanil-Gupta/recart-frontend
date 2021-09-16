import { useCallback, useState } from "react";

function useApiService() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (promise, callback) => {
    setLoading(true);
    setError(null);

    try {
      let resp = await promise;
      setLoading(false);
      callback(resp);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  return { loading, error, fetchData };
}

export default useApiService;
