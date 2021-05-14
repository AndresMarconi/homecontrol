export const addDestination = (destination) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('destination').add({ ...destination, createdAt: new Date() }).then(() => {
            dispatch({ type: "ADD_DESTINATION", destination })
            console.log('Destination added successfully')
        }).catch((err) => {
            console.log(err);;
        })
    }
}

export const removedestination = (destination) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('destination').doc(destination.id).delete().then(() => {
            console.log('Destination removed successfully')
        }).catch((err) => {
            console.log(err);;
        })
    }
}

export const updatedestination = (destination) => {
    console.log(destination);
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('destination').doc(destination.id).update({ name: destination.name }).then(() => {
            console.log('Destination updated successfully')
        }).catch((err) => {
            console.log(err);;
        })
    }
}
