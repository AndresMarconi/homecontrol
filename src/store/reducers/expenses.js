import { Expense } from '../../model/Expense'

const initialState = {
    expenses: Expense.getExpenses({}),
}

const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default expensesReducer
