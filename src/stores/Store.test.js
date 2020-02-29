import Store from './Store';

test('A new store', () => {
  const b = new Store();
  expect(b.comments.length).toBe(0);
});


test('Add comment to Store', () => {
  const b = new Store();

  expect(b.comments.length).toBe(0);
  b.addResponse(new Comment({content: 'testing'}));
  expect(b.comments.length).toBe(1);
});


test('Adding likes to the picture', () => {
  const b = new Store();
  expect(b.pictureLikes).toBe(200);
  expect(b.pictureLiked).toBe(false);
  b.setLiked();
  expect(b.pictureLikes).toBe(201);
  expect(b.pictureLiked).toBe(true);
});


test('Liking and unliking the picture', () => {
  const b = new Store();
  expect(b.pictureLikes).toBe(200);
  expect(b.pictureLiked).toBe(false);
  b.setLiked();
  expect(b.pictureLikes).toBe(201);
  expect(b.pictureLiked).toBe(true);
  b.setUnLike();
  expect(b.pictureLikes).toBe(200);
  expect(b.pictureLiked).toBe(false);
});


test('Seeding the store', () => {
  const b = new Store();
  expect(b.comments.length).toBe(0);
  b.seed([new Comment({content: 'Dit is mijn nieuwe console!', user: 'RetroGamer1996', likes: 0, picture: 'gameboy', liked: false})]);
  expect(b.comments.length).toBe(1);
});
