import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import receipeReducer from '../reducers/receipeReducer'
import registerReducer from '../reducers/register'

const configureStore=()=>{
    const store=createStore(combineReducers({
        register:registerReducer,
        receipe:receipeReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore