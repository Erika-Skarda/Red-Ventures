const initialState = {
  plants: [],
  id: undefined,
}

const plantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SELECTED_PLANT":
      return {
        ...state,
        plants: action.payload.plants
      }
    case "SET_PLANTS_TYPE":
      return {
        ...state,
        id: action.payload.id
      };
    default:
      return state;
  }
}

export default plantsReducer;