import { combineReducers } from 'redux'
import { categories } from './categories'
// placeholders for future reducers
//import { posts } from './posts'
//import { comments } from './comments'

const appReducer = combineReducers({
    categories,
    //posts,
    //comments
})

export default appReducer
