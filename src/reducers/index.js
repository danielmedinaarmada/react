const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload]
      }
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter( items => items.id !== action.payload )
      }
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      }
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      }
      // const newState = {
      //   ...state,
      //   user: action.payload,
      // }
      // console.log(newState);
      // return newState;
    case 'REGISTER_REQUEST':
    return {
      ...state,
      user: action.payload,
    }
    case 'GET_VIDEO_SOURCE':
    return {
      ...state,
      playing: state.trends.find(item => item.id === Number(action.payload) ) 
      || state.originals.find( item => item.id === Number(action.payload))
      || []
    }
    case 'SEARCH_REQUEST':
    return {
      ...state,
      searching: action.payload.trim().length > 0
      ? state.myList.filter( item => item.title.toLowerCase().includes(action.payload.trim().toLoweCase()))
      .concat(
          state.trends.filter( item => item.title.toLowerCase().includes(action.payload.trim().toLowerCase()))
      )
      .concat(
        state.originals.filter( item => item.title.toLowerCase().includes(action.payload.trim().toLowerCase()))
      )
      : []
    }
    default: 
      return state;
  }
};

export default reducer;