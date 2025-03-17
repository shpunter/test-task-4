import { assertEquals } from "jsr:@std/assert";
import { formatToPercent, formatToNumber } from "/src/utils/utils.ts";

Deno.test("formatToPercent 1", () => {
  assertEquals(formatToPercent(1), "1.00%")
})

Deno.test("formatToPercent 1.00", () => {
  assertEquals(formatToPercent(1.00), "1.00%")
})

Deno.test("formatToPercent 1.11", () => {
  assertEquals(formatToPercent(1.11), "1.11%")
})

Deno.test("formatToPercent 10", () => {
  assertEquals(formatToPercent(10), "10.00%")
})

Deno.test("formatToPercent 0.01", () => {
  assertEquals(formatToPercent(0.01), "0.01%")
})

Deno.test("formatToPercent 0.0001", () => {
  assertEquals(formatToPercent(0.0001), "0.00%")
})

Deno.test("formatToNumber 1", () => {
  assertEquals(formatToNumber(1), "1")
})

Deno.test("formatToNumber 1_000_111", () => {
  assertEquals(formatToNumber(1000111), "1 000 111")
})