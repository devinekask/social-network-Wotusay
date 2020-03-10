import Picture from "./Picture";
import Comment from "./Comment";
import User from "./User";
import DataStore from "../stores/DataStore";

test("Create a new group", () => {
  const group = new Picture({ pic: "Test" });
  expect(group.pic).toBe("Test");
  expect(group.messages.length).toBe(0);
});
