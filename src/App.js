import React from 'react';
// import logo from './logo.svg';
import './App.css';

import './bootstrap.min.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Mainpage from './animateref/Mainpage'
import Secondanimate from './second/Secondanimate'


function App() {

   

    return (    <div>
                <Router>
                    <Routes>
                        <Route path='/' element={<Mainpage></Mainpage>}></Route>
                        <Route path='second-animation' element={<Secondanimate></Secondanimate>}></Route>
                    </Routes>
                </Router>
                </div>
    )
}

export default App;
