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

const NAMES = [
  'Евгений',
  'Георгий',
  'Макс',
  'Федор',
  'Некит',
  'Илья',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const PHOTOS_COUNT = 25;
const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MAX = 30;

const getRandomInteger = (a,b) => {
  const upper = Math.floor(Math.max(a,b));
  const lower = Math.ceil(Math.min(a,b));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const createRandomIdFromRangeGenerator = (min, max) => {
  const formerValues = [];

  return function () {
    let actualValue = getRandomInteger(min, max);

    while (formerValues.includes(actualValue)) {
      actualValue = getRandomInteger(min, max);
    }

    formerValues.push(actualValue);

    return actualValue;
  };
};

const imageIdGenerator = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);
const imageUrlGenerator = createRandomIdFromRangeGenerator(1, PHOTOS_COUNT);

const createImageUrl = (id, derictory, format) => derictory + id + format;

const createRandomComment = (generatorComments, generatorUrl) => ({
  id: generatorComments(),
  avatar: createImageUrl(generatorUrl(), 'photos/avatar-', '.svg'),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
});

const createRandomComments = (count) => {
  const result = [];
  const commentIdGenerator = createRandomIdFromRangeGenerator(1, count);

  for (let i = 0; i < count; i++) {
    const urlIdGenerator = createRandomIdFromRangeGenerator(1, 6);

    result.push(createRandomComment(commentIdGenerator, urlIdGenerator));
  }

  return result;
};

const createImage = () => ({
  id: imageIdGenerator(),
  url: createImageUrl(imageUrlGenerator(), 'photos/', '.jpg'),
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(LIKES_MIN, LIKES_MAX),
  comments: createRandomComments(getRandomInteger(0, COMMENTS_MAX)),
});

const createImages = () => Array.from({length: PHOTOS_COUNT}, createImage);

const posts = createImages();

