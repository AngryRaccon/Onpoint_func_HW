const ladder = require("./ladder");

test("ladder", () => {
  expect(
    ladder
      .up()
      .up()
      .up()
      .down()
      .up()
      .showStep()
  ).toBe(3);
});
