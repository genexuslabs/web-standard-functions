import { clear } from "../../generator/out/not_implemented";

export const testCases: Array<[string, string, number]> = [
  ["123.45", ".", 123.45],
  ["123.45", undefined, 123.45],
  ["123.45.67", ".", 123.45],
  ["123.45,67", ".", 123.45],
  ["123.45,67", ",", 123],
  ["123,45,67", ",", 123.45],
  ["123.45,67", "*", 0],
  ["1891Peñarol", "", 0],
  ["1891Peñarol", ".", 1891],
  ["1891Peñarol", ",", 1891],
  ["Peñarol1891", "", 0],
  ["Peñarol1891", ".", 0],
  ["Peñarol1891", ",", 0]
];