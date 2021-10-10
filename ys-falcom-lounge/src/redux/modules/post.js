/* eslint-disable */
import imageData from '../../image.json';

// Action
let GET_IMAGE = 'post/GET_IMAGE';
let SET_FILTERED_IMAGE = 'post/SET_FILTERED_IMAGE';

// Action Creator
export let getImage = (image) => {
  return { type: GET_IMAGE, image };
};

export let setImage = (name, url) => {
  return { type: SET_FILTERED_IMAGE, name, url };
};

// Initial State
const initialState = {
  original: [],
  list: [],
};

// 첫 로딩시 모든 이미지 반환
export const setAllImage = () => {
  setImage(imageData);
};

// 필터된 문제 데이터 반환
export const setFilteredImage = (category) => {
  console.log(category);

  switch (category) {
    case 'lacrimosa':
      imageData.lacrimosa.forEach((image) => {
        console.log(image);
        setImage(image.name, image.url);
      });
    default:
      return imageData;
  }
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_FILTERED_IMAGE:
      const filtered_image = [...state.list, { name: action.name, url: action.url }];
      console.log(filtered_image);
      return { list: filtered_image };
    default:
      return state;
  }
}
