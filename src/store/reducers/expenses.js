import { toast } from "react-toastify"; 
import { Expense } from '../../model/Expense'

const initialState = {
    expenses: Expense.getExpenses({}),
}

const expensesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            toast.success("Gasto agregada correctamente", {
                position: "top-center"
            })
            return state
        case "ADD_EXPENSE_ERR":
            toast.error("Ocurrio un error", { position: "top-center" })
            return state;
        case "UPDATE_EXPENSE":
            toast.info("Gasto modificada correctamente", {
                position: "top-center"
            })
            return state
        case "REMOVE_EXPENSE":
            toast.warn("La Gasto ha sido eliminada", {
                position: "top-center"
            })
            return state
        case "REMOVE_EXPENSE_ERR":
            toast.error("Ocurrio un error al eliminar la Gasto", {
                position: "top-center"
            })
            return state
        default:
            return state 
    }
}

export default expensesReducer
