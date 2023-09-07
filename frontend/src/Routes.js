import React from 'react';
import Create from "./Create";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App'

const RoutedApp = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" exact="true" element={<App />}></Route>
            <Route path="/create" exact="true" element={<Create />}></Route>
        </Routes>
    </Router>
  )
}
export default RoutedApp