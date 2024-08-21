import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

import CounterUI from "../counter-ui";

describe("CounterUI - test component", () => {
  it("CounterUI - test value", () => {
    const value = 5;
    const mockedOnIncrement = jest.fn();
    const mockedOnDecrement = jest.fn();

    const tree = (
      <CounterUI
        value={value}
        onIncrement={mockedOnIncrement}
        onDecrement={mockedOnDecrement}
      />
    );

    const { getByText } = render(tree);
    expect(getByText(`${value}`)).toBeTruthy();
  });

  it("CounterUI - test onIncrement", () => {
    const value = 5;
    const mockedOnIncrement = jest.fn();

    const tree = <CounterUI value={value} onIncrement={mockedOnIncrement} />;

    const { getByText } = render(tree);

    const increaseButton = getByText("+");
    expect(increaseButton).toBeTruthy();

    fireEvent.press(increaseButton);
    expect(mockedOnIncrement).toHaveBeenCalled();
  });
});
