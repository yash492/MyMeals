import { useState, useCallback } from "react";

const useHttp = () => {
  const [error, hasError] = useState(null);
  const [loading, isLoading] = useState(false);

  const sendHttp = useCallback(
    async (url, applyFunction, requestMethod = {}) => {
      try {
        isLoading(true);
        hasError(null);

        const response = await fetch(url, {
          method: requestMethod.method ? requestMethod.method : "GET",
          headers: requestMethod.headers ? requestMethod.headers : {},
          body: requestMethod.body ? JSON.stringify(requestMethod.body) : null,
        });

        if (!response.ok) return new Error("Request Failed.");

        const data = await response.json();
        applyFunction(data);
      } catch (error) {
        hasError(error.message || "Something went wrong.");
      }
      isLoading(false);
    },
    []
  );

  return [loading, error, sendHttp];
};

export default useHttp;
