import React, { useEffect, useState } from "react";

export default function useRequest(request: any) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      request()
        .then((response: any) => setData(response.data))
        .catch((error: any) => setError(error))
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  return [data, loading, error];
}
