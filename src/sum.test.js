const sum = require("./sum");

describe("sum", () => {
  it("should return 3 when 1+2", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
