import React from 'react';
import './App.css';
import './bootstrap.min.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Alicered from './animateref/aliceRed'
import Secondanimate from './animationsecond/Ailceanimation'



function App() {

    

    
   

    return (    
                <Router>
                    <Routes>
                        <Route exact path='/'  element={<Alicered></Alicered>}></Route>
                        <Route path='secondanimation' element={<Secondanimate></Secondanimate>}  ></Route>
                    </Routes>
                </Router>
                
    )
}

export default App;
