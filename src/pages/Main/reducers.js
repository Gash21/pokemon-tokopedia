import { GET_POKEMON_LIST } from 'libraries/types'
const initialState = {
  pokemonList: [],
  next: null,
  previous: null,
};

const mainReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: action.payload,
        next: action.next,
        previous: action.previous,

      };

    default:
      return state;
  }
}

export default mainReducers