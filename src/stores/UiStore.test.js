import UiStore from "./UiStore";
import User from "../models/Picture";
import DataStore from "./DataStore";

test("Create a UiStore", () => {
  const uiStore = new UiStore();
  expect(uiStore.currentPost).toBeUndefined();
});


test("Set current post", () => {
  const uiStore = new UiStore();
  const user = new User({ name: "testuser" });
  uiStore.setCurrentPost(user);
  expect(uiStore.setCurrentPost).toBe(user);
});
