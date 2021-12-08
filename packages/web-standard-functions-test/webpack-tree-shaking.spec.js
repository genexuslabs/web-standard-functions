"use strict";
const fs = require("fs");
const path = require("path");

describe("webpack tree-shaking", () => {
  //Main expected
  const expectedStr = fs.readFileSync(
    `test-webpack-tree-shaking/main-expected.js`,
    "utf8"
  );

  //Main result
  const resultStr = fs.readFileSync(
    `test-webpack-tree-shaking/main-result.js`,
    "utf8"
  );

  //Test compare
  it(`should work`, () => {
    expect(resultStr).toEqual(expectedStr);
  });
});
