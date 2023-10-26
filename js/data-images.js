import {getRandomInteger, createRandomIdFromRangeGenerator, createImageUrl} from './utils.js';
import { createRandomComments } from './data-comments.js';

const DESCRIPTIONS = [
  'Микрорайон',
  'Вечеринка',
  'Семья',
  'Прогулка',
  'Лягушка',
  'Детская площадка',
  'Церковь',
  'Пикник',
  'Арбуз',
];

const PHOTOS_COUNT = 25;
const imageIdGenerator = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const imageUrlGenerator = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);

const COMMENTS = {
  MIN : 0,
  MAX : 30
};

const LIKES = {
  MIN : 15,
  MAX : 200
};

const createImage = () => ({
  id: imageIdGenerator(),
  url: createImageUrl(imageUrlGenerator(), 'photos/', '.jpg'),
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(LIKES.MIN, LIKES.MAX),
  comments: createRandomComments(getRandomInteger(COMMENTS.MIN, COMMENTS.MAX)),
});

export {createImage, PHOTOS_COUNT};
