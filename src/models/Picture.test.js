import Picture from "./Picture";
import User from "./User";
import DataStore from "../stores/DataStore";
import Comment from "./Comment";

test('Creating a new picture', () => {
  const picture = new Picture({pic:'test', store: new DataStore()});
  expect(picture.pic).toBe("test");
  expect(picture.comments.length).toBe(0);
});

test("Can't create a picture without a store", () => {
  expect(() => new Picture({ name: "testgroup" })).toThrow();
});


test("DataStore must have a reference to a created picture", () => {
  const dataStore = new DataStore();
  expect(dataStore.pictures.length).toBe(0);
  const picture = new Picture({ pic: "testuser", store: dataStore });
  expect(dataStore.pictures.length).toBe(1);
  expect(dataStore.pictures[0]).toStrictEqual(picture);
});

test("Add user to a picture", () => {
  const picture = new Picture({ name: "testgroup", store: new DataStore() });
  expect(picture.users.length).toBe(0);
  const user = new User({ name: "testuser", store: new DataStore() });
  picture.linkUser(user);
  expect(picture.users.length).toBe(1);
  expect(picture.users[0]).toBe(user);
  expect(picture.users[0].pictures).toContain(picture);
});

test("Can only add the same user once to a picture", () => {
  const picture = new Picture({ name: "testgroup", store: new DataStore() });
  expect(picture.users.length).toBe(0);
  const user = new User({ name: "testuser", store: new DataStore() });
  picture.linkUser(user);
  expect(picture.users.length).toBe(1);
  picture.linkUser(user);
  expect(picture.users.length).toBe(1);
});

test("Users provided on Picture instantiation must have a refence to the created group", () => {
  const user = new User({ name: "testuser", store: new DataStore() });
  const picture = new Picture({
    name: "testgroup",
    store: new DataStore(),
    users: [user]
  });

  expect(user.pictures[0]).toBe(picture);
});

test("Amount of comments", () => {
  const user = new User({ name: "testuser", store: new DataStore() });
  const picture = new Picture({ name: "testgroup", store: new DataStore() });
  expect(picture.amountComments).toBe(0);
  const comment = new Comment({
    content: 'test',
    picture,
    user
  });
  picture.linkComment(comment);
  expect(picture.amountComments).toBe(1);
  const comment2 = new Comment({
    content: 'test123',
    picture,
    user
  });
  picture.linkComment(comment2);
  expect(picture.amountComments).toBe(2);
})


test('liking the pic', () => {
  const picture = new Picture({ name: "testgroup", store: new DataStore() });
  expect(picture.pictureLiked).toBe(false);
  expect(picture.pictureLikes).toBe(200);
  picture.setLiked();
  expect(picture.pictureLiked).toBe(true);
  expect(picture.pictureLikes).toBe(201);
  picture.setUnLike();
  expect(picture.pictureLiked).toBe(false);
  expect(picture.pictureLikes).toBe(200);

})
