import Comment from './Comment';
import DataStore from "../stores/DataStore";
import Picture from './Picture';
import User from './User';

test('create a comment', () => {
  const picture =  new Picture({pic:'test', store: new DataStore()});
  const user = new User({name:'test', store: new DataStore()});
  const comment = new Comment({content:'test' , user,  picture});

  expect(comment.content).toBe('test');
  expect(comment.user).toBeInstanceOf(Object);
  expect(comment.picture).toBeInstanceOf(Object);
  expect(comment.liked).toBe(false);
})


test("Comment must have an user" , () => {
  expect(() => new Comment({ content: "test", group: {} })).toThrow();
})

test("Comment must have a group", () => {
  expect(() => new Comment({ content: "test", user: {} })).toThrow();
});

test("Comment must have some content", () => {
  expect(() => new Comment({ group: {}, user: {} })).toThrow();
  expect(() => new Comment({ content: "", group: {}, user: {} })).toThrow();
});


test("User must have a reference to a created comment", () => {
  const user = new User({ name: "testuser", store: new DataStore() });
  const picture = new Picture({ name: "testpic", store: new DataStore() });
  const comment = new Comment({ content: "test", user, picture });
  expect(comment.user).toBe(user);
  expect(comment.user.comments).toContain(comment);
});


test('Liking the comment', () => {
  const user = new User({ name: "testuser", store: new DataStore()});
  const picture = new Picture({ name: "testpic", store: new DataStore()});
  const c = new Comment(({content: 'test', user, picture}));
  expect(c.likes).toBe(0);
  expect(c.liked).toBe(false);
  c.setCommentLiked();
  expect(c.likes).toBe(1);
  expect(c.liked).toBe(true);
});

test('Liking and unliking the comment', () => {
  const user = new User({ name: "testuser", store: new DataStore()});
  const picture = new Picture({ name: "testpic", store: new DataStore()});
  const c = new Comment(({content: 'test', user, picture}));
  expect(c.likes).toBe(0);
  expect(c.liked).toBe(false);
  c.setCommentLiked();
  expect(c.likes).toBe(1);
  expect(c.liked).toBe(true);
  c.setCommentUnLike();
  expect(c.likes).toBe(0);
  expect(c.liked).toBe(false);
});
