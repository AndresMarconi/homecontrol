export const addExpense = (expense) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const uid = getState().firebase.auth.uid;
        firestore.collection('expense').add({ ...expense, createdAt: new Date(), authorId: uid }).then(() => {
            dispatch({ type: "ADD_EXPENSE", expense })
            console.log('Expense added successfully')
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const removeExpense = (expense) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('expense').doc(expense.id).delete().then(() => {
            dispatch({ type: "REMOVE_DESTINATION" })
            console.log('Expense removed successfully')
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const updateExpense = (expense) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('expense').doc(expense.id).update({ ...expense }).then(() => {
            dispatch({ type: "UPDATE_DESTINATION" })
            console.log('Expense updated successfully')
        }).catch((err) => {
            console.log(err)
        }) 
    }
}
