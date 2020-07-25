const MyLib = require("../src/my-lib").default;

describe("MyLib", () => {
  test("test1", () => {
    expect(new MyLib().version).toBe("1.0.0");
  });
});
