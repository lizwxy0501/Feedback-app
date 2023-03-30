import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import Form from "./components/Form"
import Header from "./components/Header"
import ItemList from "./components/ItemList"
import Card from "./components/shared/Card"
import Stats from "./components/Stats"
import About from "./pages/About"
import AboutIcon from "./components/AboutIcon"
import Post from "./components/Post"
import { FeedbackProvider } from "./components/context/Context"


function App() {

    return (
        <FeedbackProvider>
        <Router>
        <Header /> 
        {/* bgColor='grey' textColor = 'lightgreen', this is how to pass parameters to header */}
        <div className = 'container' >
            <Routes>
                <Route exact path='/' element={
                    <>
                        <Form />
                        <Stats />
                        <ItemList />
                    </>
                }>
                </Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/post/*' element={<Post />}></Route>
            </Routes>
            <Card>
                <NavLink to='/about'>About</NavLink>
            </Card>
                <AboutIcon />
        </div>
        </Router>
        </FeedbackProvider>
    )
}

export default App


// function App() {
//     return React.createElement(
//         'div',
//         {className:'container'},
//         React.createElement('h1',{}, "My App")
//     )
// }
// js way


// const title = 'Test title'
// const body = 'This is a test body'
// const comments = [

//     {id:1, text:'comment one'},
//     {id:2, text:'comment two'},
//     {id:3, text:'comment three'},
// ]

// const showComments = false
// const commentBlock = (<div className="comments">
//                         <h3> Comments ({comments.length})</h3>
//                             <ul>
//                                 {comments.map((comment) => {
//                                     return (
//                                     <li key={comment.id}>
//                                         {comment.text}
//                                     </li>)})}
//                             </ul>
//                         </div>)


        /* //     <h1>
        //         {title.toUpperCase()}
        //     </h1>
        //     <p>{body}</p>
        //     {showComments && commentBlock}
        //     {Math.random() * 100} */