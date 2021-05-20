export const addDestination = (destination) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const uid = getState().firebase.auth.uid;
        firestore.collection('destination').add({ ...destination, createdAt: new Date(), authorId: uid }).then(() => {
            dispatch({ type: "ADD_DESTINATION", destination })
            console.log('Destination added successfully')
        }).catch((err) => {
            dispatch({ type: "ADD_DESTINATION_ERR" })
            console.log(err);;
        })
    }
}

export const removeDestination = (destination) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('destination').doc(destination.id).delete().then(() => {
            dispatch({ type: "REMOVE_DESTINATION" })
            console.log('Destination removed successfully')
        }).catch((err) => {
            dispatch({ type: "REMOVE_DESTINATION_ERR" })
            console.log(err);;
        })
    }
}

export const updateDestination = (destination) => {
    console.log(destination);
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('destination').doc(destination.id).update({ name: destination.name }).then(() => {
            dispatch({ type: "UPDATE_DESTINATION" })
            console.log('Destination updated successfully')
        }).catch((err) => {
            console.log(err);;
        })
    }
}
