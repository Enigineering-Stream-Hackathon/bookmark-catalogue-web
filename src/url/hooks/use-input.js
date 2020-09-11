import { useState } from "react";

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
};
  return {
    value,
    setValue,
    reset: () => setValue(initialValue),
    handleChange
  };
};

export default useInput;