import React, { useContext } from 'react'
import { FaEdit, FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import Context from './context/Context'


function Item({item}) {
  const {deleteFeedback, editFeedback} = useContext(Context)

  return (
    <Card >
        <div className="num-display">{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} 
        className="close">
            <FaTimes color='red'></FaTimes>
        </button>
        <button onClick={() => editFeedback(item) } className="edit">
          <FaEdit color='lightgreen' />
        </button>
        <div className="text-dispaly">{item.text}</div>
    </Card>
  )
}


export default Item


    // const [rating, setRating] = useState(7)
    // const [text, setText] = useState("This is an example of the feedback item.")
    //this is a hook from react

    // const handleClick = () => {
    //     setRating( (prev) =>{
    //         return prev+1
    //     })
    // }