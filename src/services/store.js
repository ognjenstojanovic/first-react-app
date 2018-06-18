import { createStore as realCreateStore, applyMiddleware, compose } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import {createLogger} from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'


const middleware = [
	thunkMiddleWare,
	process.env.NODE_ENV !== 'production' 
		? createLogger({collapsed: true})
		: null
]

export function createStore(reducer, initialState) {
	return realCreateStore(
        reducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(
                ...middleware.filter(m => m != null)
            )
        )
	)
}