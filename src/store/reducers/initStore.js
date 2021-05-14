import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'
import thunk from 'redux-thunk'
import firebaseConfig from '../../config/firebase'
import {
    getFirebase
} from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'

const initStore = (initialState = {}) => {
    if (process.browser && window.__store) {
        return window.__store
    }

    const middleware = []

    const store = createStore(
        reducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }), ...middleware), reduxFirestore(firebaseConfig))
    )

    if (process.browser) {
        window.__store = store
    }

    return store
}

export default initStore