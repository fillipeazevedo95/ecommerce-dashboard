import { createStore, combineReducers } from 'redux'

import canecaReducer from './canecas'
import layoutReducer from './layout'

const rootReducers = combineReducers({
    canecas: canecaReducer,
    layout: layoutReducer
})

export default createStore(rootReducers)