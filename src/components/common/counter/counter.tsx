import CounterUI from "./counter-ui";
import useCounter from "./use-counter";

type CounterProps = {};

const Counter: React.FC<CounterProps> = () => {
  const { value, onIncrement, onDecrement } = useCounter();

  return (
    <CounterUI
      value={value}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
};

export default Counter;
