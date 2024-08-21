import { act, renderHook } from "@testing-library/react-native";

import useCounter from "../use-counter";

describe("useCounter - test hook", () => {
  it("useCounter - test value", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.value).toEqual(0);
  });

  it("useCounter - test onIncrement", () => {
    const { result } = renderHook(() => useCounter());

    expect(result.current.value).toEqual(0);

    act(async () => result.current.onIncrement());

    expect(result.current.value).toEqual(1);
  });
});
