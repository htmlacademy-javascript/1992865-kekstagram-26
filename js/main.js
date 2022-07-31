//import './alert-forms';
import './utility.js';
import './api.js';
import './thumbnail-rendering.js';
import './forms.js';
import './window-big-picture.js';
import './filters-photos.js';
import './uploaded-photo-form.js';

import {showButtonFilter} from './filters-photos.js';
import {getData} from './api.js';
import {showAlert} from './utility.js';
import {openBigPicture} from './window-big-picture.js';

getData((photos) => {
  showButtonFilter(photos);
  openBigPicture(photos);
},
showAlert);
