import { Category } from '../model/Category'

const initialState = {
    title: "",
    categories: Category.getCategories(),
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SET_TITLE":
            return { ...state, title: action.title }
        case "ADD_CATEGORY":
            let cat = new Category({ name: action.category.name })
            return { ...state, categories: state.categories.concat(cat) }
        case "EDIT_CATEGORY":
            return {
                ...state,
                categories: state.categories.map((category, index) => {
                    // Find the item with the matching id
                    if (category.docId === action.category.docId) {
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
        default:
            return state
    }
}

export default categoryReducer