import Comment from './Comment';

test('New Comment', () => {
  const comment = new Comment({content: 'test', user: 'BigBoi'});
  expect(comment.content).not.toBe('');
  expect(comment.user).not.toBe('');
});

test('Liking the comment', () => {
  const c = new Comment();
  expect(c.length).toBe(0);
  
});

