export const addCategory = (category) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('category').add({ ...category, createdAt: new Date() }).then(() => {
            dispatch({ type: "ADD_CATEGORY", category })
            console.log('Category added successfully')
        }).catch((err) => {
            console.log(err);;
        })
    }
}

export const removeCategory = (category) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('category').doc(category.id).delete().then(() => {
            console.log('Category removed successfully')
        }).catch((err) => {
            console.log(err);;
        })
    }
}

export const updateCategory = (category) => {
    console.log(category);
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('category').doc(category.id).update({ name: category.name }).then(() => {
            console.log('Category updated successfully')
        }).catch((err) => {
            console.log(err);;
        })
    }
}
