import { useEffect, useState } from "react";

type FetchOutPut = {
  data: any;
  loading: boolean;
  error: boolean;
};

const useFetch = (url: string): FetchOutPut => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
