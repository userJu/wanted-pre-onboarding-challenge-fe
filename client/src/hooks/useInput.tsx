import React, { useState, ChangeEvent } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const resetvalue = () => setValue("");

  return { value, onChange, resetvalue };
};

export default useInput;
