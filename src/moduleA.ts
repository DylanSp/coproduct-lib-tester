import { Tagged, TaggedData } from "coproduct";

export type Option<T> = TaggedData<"some", T> | Tagged<"none">;
export const None = Tagged("none");
export const Some = TaggedData("some");

export const bla = Tagged("bla");
