// // Action
// const ADD_FILTER = 'filter/ADD_FILTER';

// // Action Creator
// export const addFilter = (category) => {
//   return { type: ADD_FILTER, category };
// };

// // Initial State
// const initialState = {
//   list: [],
// };

// // Reducer
// export default function reducer(state = initialState, action = {}) {
//   switch (action.type) {
//     case ADD_FILTER:
//       const added_filter = [...state.list, action.category];
//       console.log(added_filter);
//       return { list: added_filter };
//     default:
//       return state;
//   }
// }
