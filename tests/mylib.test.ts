/**
 * https://sbfl.net/blog/2019/01/20/javascript-unittest/
 * npx jest
 * npx jest --coverage
 */
import { add } from "../src/mylib";
import { timer } from "../src/mylib";
import { loop } from "../src/mylib";
import { clamp } from "../src/mylib";

describe("[add]計算", () => {
  test("1 + 2", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("2 + 2", () => {
    expect(add(2, 2)).toBe(4);
  });

  test("-1 + 2", () => {
    expect(add(-1, 2)).toBe(1);
  });

  test("0.1 + 0.2", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe("[async]真偽値", () => {
  test("0.1 + 0.2", () => {
    expect(add(0.1, 0.2)).not.toBeCloseTo(5);
  });
});
test("[async]非同期処理", () => {
  expect(timer(1000)).resolves.toBe("success");
});

test("[loop]モック関数", () => {
  const loopNum = 5;
  const mock = jest.fn(); // モック関数を作る
  loop(mock, loopNum); // mockを渡して実行する

  // mock関数の呼び出しについて検証する
  expect(mock).toBeCalledTimes(loopNum); // 5回呼び出されているはず
  expect(mock).nthCalledWith(1, 0); // 1回目はmock(0)で呼び出される
  expect(mock).nthCalledWith(2, 1); // 2回目はmock(1)で呼び出される
});

describe("clamp", () => {
  test("value < min", () => {
    expect(clamp(0, 2, 5)).toBe(2);
  });

  test("value = min", () => {
    expect(clamp(2, 2, 5)).toBe(2);
  });

  test("min < value < max", () => {
    expect(clamp(4, 2, 5)).toBe(4);
  });

  test("value = max", () => {
    expect(clamp(5, 2, 5)).toBe(5);
  });

  test("value > max", () => {
    expect(clamp(6, 2, 5)).toBe(5);
  });
});
