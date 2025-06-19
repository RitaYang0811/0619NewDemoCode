const sum = require("./sum");

describe("sum", () => {
  it("should return 3 when 1+2", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("should return 0.3 when 0.1+0.2", () => {
    expect(sum(0.1, 0.2)).toBe(0.3);
  });
});
