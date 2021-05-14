import { Destination } from '../../model/Destination'

const initialState = {
    destinations: Destination.getDestinations(),
}

const destinationReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}


export default destinationReducer