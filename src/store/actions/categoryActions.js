export const addCategory = (category) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('category').add({ ...category, createdAt: new Date() }).then(() => {
            console.log('Category added successfully')
        }).catch((err) => {
            console.log(err);;
        })
    }
}