import { toast } from "react-toastify";

const categoryReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_CATEGORY":
            toast.success("Categoria agregada correctamente", {
                position: "top-center"
            })
            return state
        case "ADD_CATEGORY_ERR":
            toast.error("Ocurrio un error", { position: "top-center" })
            return state;
        case "UPDATE_CATEGORY":
            toast.info("Categoria modificada correctamente", {
                position: "top-center"
            })
            return state
        case "REMOVE_CATEGORY":
            toast.warn("La categoria ha sido eliminada", {
                position: "top-center"
            })
            return state
        case "REMOVE_CATEGORY_ERR":
            toast.error("Ocurrio un error al eliminar la categoria", {
                position: "top-center"
            })
            return state
        default:
            return state
    }
}

export default categoryReducer