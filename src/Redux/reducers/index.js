import { combineReducers } from 'redux';
import PostsReducer from './PostsReducer'
import AlbumsReducer from './AlbumsReducer'
import UsersReducer from './UsersReducer'
import TodosReducer from './TodosReducer'

export default combineReducers({
	PostsReducer,AlbumsReducer,UsersReducer,TodosReducer
});
