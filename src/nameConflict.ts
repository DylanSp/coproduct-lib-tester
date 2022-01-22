import { TaggedData } from "coproduct";

type TypeA = TaggedData<"MyTag", string>;
type TypeB = TaggedData<"MyTag", number>;

const MyTag = TaggedData("MyTag");

const taggedStr = MyTag("testStr");
const taggedNum = MyTag(3);
