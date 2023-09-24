import React from 'react';
import Create from "./Create";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App'
import SinglePost from './SinglePost';
import UpdatePost from './UpdatePost';

const RoutedApp = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" exact="true" element={<App />}></Route>
            <Route path="/create" exact="true" element={<Create />}></Route>
            <Route path="/post/:id" exact="true" element={<SinglePost />}></Route>
            <Route path="/post/update/:id" exact="true" element={<UpdatePost/>}></Route>
        </Routes>
    </Router>
  )
}
export default RoutedApp