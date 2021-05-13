import { combineReducers } from 'redux'

import categories from './categories'
import destinations from './destinations'
import expenses from './expenses'

export default combineReducers({
    categories,
    destinations,
    expenses
})