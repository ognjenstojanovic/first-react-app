import { createStore as realCreateStore, applyMiddleware } from 'redux'
import thunkMiddleWare from 'redux-thunk'
import {createLogger} from 'redux-logger'

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
		applyMiddleware(
			...middleware.filter(m => m != null)
		)
	)
}