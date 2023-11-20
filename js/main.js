import './data.js';
import {PHOTOS_COUNT, createImage } from './data.js';
import {createPictures} from './pictures.js';
import { initPictures } from './big-picture.js';

createPictures(Array.from( {length: PHOTOS_COUNT}, createImage));
const pictures = Array.from( {length: PHOTOS_COUNT}, createImage);

createPictures(pictures);

initPictures(pictures);
