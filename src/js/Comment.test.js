import Comment from './Comment';

test('New Comment', () => {
  const comment = new Comment({content: 'test', user: 'BigBoi', picture: 1});
  expect(comment.content).not.toBe('');
  expect(comment.user).not.toBe('');
});

test('Liking the comment', () => {
  const c = new Comment(({content: 'test', user: 'test', picture: 1}));
  expect(c.likes).toBe(0);
  expect(c.liked).toBe(false);
  c.setCommentLiked();
  expect(c.likes).toBe(1);
  expect(c.liked).toBe(true);
});

test('Picture must have an name', () => {
  expect (() => new Comment({content: 'Test', user: 'test', key: 0})).toThrow();
});

test('Comment must have content', () => {
  expect(() => new Comment({picture: {}})).toThrow();
  expect(() => new Comment({content: '', picture: {}})).toThrow();
});
