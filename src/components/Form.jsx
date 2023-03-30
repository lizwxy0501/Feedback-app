
import React, { useContext, useEffect, useState } from 'react'
import Context from './context/Context'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

function Form() {

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState('')

    const {addFeedback, itemEdit, updateFeedback} = useContext(Context)

    useEffect(() => {
        if (itemEdit.edit === true) {
            setBtnDisabled(false)
            setText(itemEdit.item.text)
            setRating(itemEdit.item.rating)
        }
    }, [itemEdit])
    
    //real time text checking
    const handleTextChange = (e) => {
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== '' && text.trim().length <= 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }
            if (itemEdit.edit === true) {
                updateFeedback(itemEdit.item.id, newFeedback)
            } else {
                addFeedback(newFeedback)
            }

            //set empty text after submit
            setText('')
        }

    }


  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={setRating} selected={rating} />
            
            <div className='input-group'>
                <input 
                onChange={handleTextChange} 
                type='text' 
                placeholder='Write a review'
                value={text}
                />
                <Button type='submit' isDisabled={btnDisabled}>
                     Submit
                     </Button>
            </div>
             {message && <div className='message'>{message}</div>}
        </form>
    </Card>

  )
}

export default Form