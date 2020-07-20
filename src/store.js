import {createStore, applyMiddleware} from 'redux'
import characterReducer from './reducer/characterReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'

export const store = createStore(
  characterReducer,
  composeWithDevTools(applyMiddleware(thunk))
)
