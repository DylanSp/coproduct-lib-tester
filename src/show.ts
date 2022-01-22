import { match } from "coproduct";
import { Option as OptionA, None as NoneA, Some as SomeA } from "./moduleA";
import { Option as OptionB, None as NoneB, Some as SomeB } from "./moduleB";

export function showOptionANum(data: OptionA<number>): string {
  return match(data).case({
    none: () => "none",
    some: (inner) => inner.toString(10),
  });
}

export function showOptionBNum(data: OptionB<number>): string {
  return match(data).case({
    none: () => "none",
    some: (inner) => inner.toString(10),
  });
}
