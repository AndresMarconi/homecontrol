import { createStore } from "redux"
import {Expense} from './model/Expense'
import {Category} from './model/Category'
import {Destination} from './model/Destination'

const initialState = {
    title: "", 
    expenses: Expense.getExpenses({}),  
    categories: Category.getCategories(),
    destinations: Destination.getDestinations()
}
 
const reducerHomeControl = (state = initialState, action) => {

    if (action.type === "SET_TITLE") {
        return {
            ...state,
            title: action.title
        }
    }

    if (action.type === "ADD_CATEGORY") {
        let cat = new Category({name: action.category.name})
        return {
            ...state,
            categories: state.categories.concat(cat)
        }
    }

    if (action.type === "EDIT_CATEGORY") {
        return{ 
            ...state,
            categories : state.categories.map((category, index) => {
                    // Find the item with the matching id
                    if(category.docId === action.category.docId) {
                    // Return a new object
                    return {
                        ...category,  // copy the existing item
                        name: action.attributes.name  // replace the email addr
                    }
                }
                // Leave every other item unchanged
                return category;
            })
        }
    }

    return state
}

export default createStore(reducerHomeControl)