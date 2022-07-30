const imgFilter = document.querySelector('.img-filters');
//const pictures = document.querySelector('.container');

const showButtonFilter = () => {
  imgFilter.classList.remove('img-filters--inactive');
};

export {showButtonFilter};
