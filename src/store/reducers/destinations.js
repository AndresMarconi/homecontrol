import { Destination } from '../../model/Destination'
import { toast } from "react-toastify"; 

const initialState = {
    destinations: Destination.getDestinations(),
}

const destinationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_DESTINATION":
            toast.success("destino agregada correctamente", {
                position: "top-center"
            })
            return state
        case "ADD_DESTINATION_ERR":
            toast.error("Ocurrio un error", { position: "top-center" })
            return state;
        case "UPDATE_DESTINATION":
            toast.info("destino modificada correctamente", {
                position: "top-center"
            })
            return state
        case "REMOVE_DESTINATION":
            toast.warn("La destino ha sido eliminada", {
                position: "top-center"
            })
            return state
        case "REMOVE_DESTINATION_ERR":
            toast.error("Ocurrio un error al eliminar la destino", {
                position: "top-center"
            })
            return state
        default:
            return state
    }
}


export default destinationReducer