import { useState, useEffect } from "react";

const useFetch = (x) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      setIsLoading(true);
      setError(null); // Reset errors before new fetch

      try {
        const res = await fetch(x);

        if (!res.ok) {
          throw new Error(`Error Fetching data: ${res.status}`);
        }

        const data = await res.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    // Trigger the fetch only if `x` changes
    if (x) {
      dataFetch();
    }
  }, [x]); // Dependency on `x` so fetch happens only when `x` changes

  return { data, isLoading, error };
};

export default useFetch;
