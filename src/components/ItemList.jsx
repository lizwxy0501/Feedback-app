import React, { useContext } from 'react'
import FeedbackItem from "./Item"
import { motion, AnimatePresence } from "framer-motion"
import Context from './context/Context'

function ItemList() {

    const {feedback} =useContext(Context)

    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (
        <div className='feedback-list'>
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div 
                key={item.id}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                >
                    <FeedbackItem 
                        key={item.id} 
                        item={item}
                    />
                </motion.div>
            ))}</AnimatePresence>
            </div>
      )

//   return (
//     <div className='feedback-list'>
//         {feedback.map((item) => (
//             <FeedbackItem 
//             key={item.id} 
//             item={item}
//             handleDelete={handleDelete}
//             />
//         ))}
//         </div>
//   )
}

// ItemList.propTypes = {
//     feedback: PropTypes.arrayOf (PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         text: PropTypes.string.isRequired,
//         rating: PropTypes.number.isRequired
//     }))
// }

export default ItemList