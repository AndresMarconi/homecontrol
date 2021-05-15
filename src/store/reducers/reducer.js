import { combineReducers } from 'redux'

import firebaseReducer from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore';
import categories from './categories'
import destinations from './destinations'
import expenses from './expenses'
import pageConfig from './pageConfig'
import authReducer from './auth'

export default combineReducers({
    categories,
    destinations,
    expenses,
    pageConfig,
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})