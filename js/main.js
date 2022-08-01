import './utility.js';
import './api.js';
import './thumbnail-rendering.js';
import './forms.js';
import './window-big-picture.js';
import './filters-photos.js';
import './uploaded-photo-form.js';

import {showButtonFilter} from './filters-photos.js';
import {getData} from './api.js';
import {showAlert} from './alert-forms.js';

getData((photos) => {
  showButtonFilter(photos);
},
showAlert);
