import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

function Post() {

    const status = 200


    if(status === 404) {
        return <Navigate to='/notfound'/>
    }

    // const params = useParams()
  return (
    <div>
        {/* <h1>Post {params.id}</h1>
        <p>{params.name}</p> */}
        <h1>Post</h1>
        <Routes>
            <Route path='/show' element={<h1>Hello Route!</h1>}></Route>
        </Routes>
    </div>
  )
}

export default Post

