import './api.js';
import './thumbnail-rendering.js';
import './forms.js';
import './window-big-picture.js';

import {getData} from './api.js';
import {showAlert} from './utility.js';
import {addingPhoto} from './thumbnail-rendering.js';
import {openBigPicture} from './window-big-picture.js';

getData((photos) => {
  addingPhoto(photos);
  openBigPicture(photos);
},
showAlert);
