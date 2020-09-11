import { useState } from "react";

export const usePostRequest = () => {
  const sendRequest = (url, body) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  };
  return {
    sendRequest,
  };
};

export default usePostRequest;
