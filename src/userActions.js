export const SET_USER = 'SET_USER';
export const ADD_ARTICLE = 'ADD_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';

export const setUser = (email) => ({
  type: SET_USER,
  payload: email,
});

export const addArticle = (articles) => {
  return {
    type: ADD_ARTICLE,
    payload: {
      articles,
    },
  };
};

export const deleteArticle = (index) => {
  return {
    type: DELETE_ARTICLE,
    payload: index,
  };
};
