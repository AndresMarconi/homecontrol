export const addCategory = (category) => {
    return (dispatch, getState, { getFirestore }) => { 
        const uid = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('category').add({ ...category, createdAt: new Date(), authorId: uid }).then(() => {
            dispatch({ type: "ADD_CATEGORY" })
            console.log('Category added successfully')
        }).catch((err) => {
            dispatch({ type: "ADD_CATEGORY_ERR" })
            console.log(err);;
        })
    }
}

export const removeCategory = (category) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('category').doc(category.id).delete().then(() => {
            dispatch({ type: "REMOVE_CATEGORY" })
            console.log('Category removed successfully')
        }).catch((err) => {
            dispatch({ type: "REMOVE_CATEGORY_ERR" })
            console.log(err);;
        })
    }
}

export const updateCategory = (category) => {
    console.log(category);
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('category').doc(category.id).update({ name: category.name }).then(() => {
            dispatch({ type: "UPDATE_CATEGORY" })
            console.log('Category updated successfully')
        }).catch((err) => {
            console.log(err);;
        })
    }
}
