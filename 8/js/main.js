import './data.js';
import {PHOTOS_COUNT, createImage } from './data.js';
import {createPictures} from './pictures.js';

createPictures(Array.from( {length: PHOTOS_COUNT}, createImage));
