import { SET_USER } from './userActions';
import { ADD_ARTICLE } from './userActions';
import { DELETE_ARTICLE } from './userActions';

const initialState = {
  email: null,
  articles: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      const addedArticles = [...state.articles, action.payload]; 

      console.log("Updated Articles after adding:", addedArticles); 

      return {
        ...state,
        articles: addedArticles, 
      };
    case DELETE_ARTICLE:
      const updatedArticles = [...state.articles];
      updatedArticles.splice(action.payload, 1);
      console.log("Updated Articles after deletion:", updatedArticles); 

      return {
        ...state,
        articles: updatedArticles,
      };
    case SET_USER:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
