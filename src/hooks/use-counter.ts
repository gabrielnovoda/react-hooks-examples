import { useState } from "react";

export const useCounter = () => {
  const [value, setValue] = useState(0);

  const onIncrement = () => {
    setValue((v) => v + 1);
  };

  const onDecrement = () => {
    setValue((v) => v - 1);
  };

  return {
    value,
    onIncrement,
    onDecrement,
  };
};
