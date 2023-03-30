import React from 'react'
import PropTypes from 'prop-types'


// function Card() {
//   return (
//     <div>Card</div>
//   )
// }
function Card({children, reverse}) {
    // if (!reverse) {
    //     return <div className='card'>{children}</div>
    // }

    return <div className={`card ${reverse && 'reverse' }`}>{children}</div>
}


Card.defaultProps = {
    reverse:false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse:PropTypes.bool
}


export default Card