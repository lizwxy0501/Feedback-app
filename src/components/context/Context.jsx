import React, { createContext,  useState } from 'react'
import {v4 as uuidv4} from 'uuid'


const Context = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id:1,
            text: 'This is a test context 01',
            rating: 10
        },
        {
            id:2,
            text: 'This is a test context 02',
            rating: 1
        },
        {
            id:3,
            text: 'This is a test context 03',
            rating: 5
        }

    ])

    const [itemEdit, setItemEdit] = useState({
        item: {},
        edit: false,
    })

    //Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    //delete feedback
    const deleteFeedback = (id) => {
        console.log("Deleting Feedback", id)
        if (window.confirm("Are you sure you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id))
            console.log("Deleted Feedback", id)
        }
    }

    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) => (item.id === id ? 
                {...item, ...updItem} : item)))

    }

    //set item to be updated
    const editFeedback = (item) => {
        setItemEdit({
            item,
            edit:true
        })
    }


    return <Context.Provider value={{
        feedback,
        itemEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
    }}>
        {children}
    </Context.Provider>
}


export default Context