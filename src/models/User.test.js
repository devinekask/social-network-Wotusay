import User from "./User";
import Picture from "./Picture";
import Comment from "./Comment";
import DataStore from "../stores/DataStore";

test('New user', () => {
  const dataStore = new DataStore();
  const user =  new User({name:'test', store: dataStore});
  expect(user.name).toBe("test");
})

test("Can't create a user without a store", () => {
  expect(() => new User({ name: "testuser" })).toThrow("voorzie een store");
});

test("DataStore must have a reference to a created user", () => {
  const dataStore = new DataStore();
  expect(dataStore.users.length).toBe(0);
  const user = new User({ name: "testuser", store: dataStore });
  expect(dataStore.users.length).toBe(1);
  expect(dataStore.users[0]).toStrictEqual(user);
});

test("Link a group to a user", () => {
  const user = new User({ name: "testuser", store: new DataStore() });
  const picture = new Picture({ pic: "testgroup", store: new DataStore() });
  expect(user.pictures).toStrictEqual([]);
  user.linkPicture(picture);
  expect(user.pictures).toContain(picture);
  expect(user.pictures[0].users).toContain(user);
});

test("Link a comment to a user", () => {
  const user = new User({ name: "testuser", store: new DataStore() });
  const picture = new Picture({ pic: "testgroup", store: new DataStore() });
  expect(user.comments).toStrictEqual([]);
  const comment = new Comment({ content: "testgroup", user, picture });
  expect(user.comments).toContain(comment);
});
