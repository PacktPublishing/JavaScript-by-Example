const initialState = {
  posts: [

  ],
  authors: [

  ],
  ajaxCalls: {
    getAllPosts: {
      loading: false,
      hasError: false,
    },
    getAuthors: {
      loading: false,
      hasError: false,
    },
    addPost: {
      loading: false,
      hasError: false,
    }
  }
};

export default initialState;
