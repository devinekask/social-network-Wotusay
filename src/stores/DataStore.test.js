import DataStore from './DataStore';
import User from '../models/User';
import Picture from '../models/Picture';
import Comment from '../models/Comment';

test('A new store', () => {
  const b = new DataStore();
  expect(b.pictures).toBeInstanceOf(Array);
  expect(b.pictures.length).toBe(0);
});

function getSeedData(store) {
  const user = new User({name: 'test123', store: store});
  const picture = new Picture({pic:'test', store: store});
  new Comment({
    content: "content1",
    user,
    picture,
  })

  return picture
}

test('testing the seed data', () => {
  const store = new DataStore();
  getSeedData(store);
  expect(store.pictures.length).toBe(1);
});

test('testing the seed', () => {
  const store = new DataStore();
  const user =  new User({name: 'test', store})
  const picture =  new Picture({pic: "asd", store});
  picture.comments = [
    new Comment ({content:'test', picture, user:user})
  ]

  store.seed(picture);
  expect(store.pictures).toBe(picture);

})

test('get a picture id', () => {
  const store = new DataStore();
  const picture =  new Picture({pic: "asd", store});
  const id = picture.id;
  expect(store.getPictureById(id)).toBe(picture);
});


test('get a userpic', () => {
  const store = new DataStore();
  const user =  new User({name: 'test', store})
  const picture =  new Picture({pic: "asd", store});
  picture.comments = [
    new Comment ({content:'test', picture, user:user})
  ]
  store.getUserPics(user.id);
  expect(store.pictures.length).toBe(1);
})
