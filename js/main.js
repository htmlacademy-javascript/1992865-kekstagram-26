import './api.js';
import './thumbnail-rendering.js';
import './forms.js';
import './window-big-picture.js';

import {getData} from './api.js';
import {showAlert} from './utility.js';
import {addingPhoto} from './thumbnail-rendering.js';

const photos = [];

getData(addingPhoto, showAlert, photos);

export {photos};
