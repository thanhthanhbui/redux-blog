const blogs = ( state = [], action ) => {
  switch(action.type) {
    case 'BLOGS':
      return action.blogs
    case 'ADD_BLOG':
      return [action.blog, ...state]
    case 'EDIT_BLOG':
      return state.map((blog) => blog.id === action.id ? {...blog, editing: !blog.editing} : blog)
    case 'DELETE_BLOG':
      return state.filter((blog) => blog.id !== action.id)
    default:
      return state
  }
}

export default blogs