import './App.css';
import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

import { BrowserRouter , Routes, Link, Route} from 'react-router-dom';
import "react-router-dom"

function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="/chats"/>
                  
                <Route 
                    path='/'
                    element={<><TinderCards/><SwipeButtons/></>}
                >
                 
                </Route>
             </Routes>
        </BrowserRouter>
        {/* Tinder cards */}
        {/*  Buttons */}
        {/*  Chat screen-->matches screen */}
        {/*  Individual Chat screen-->individual match screen */}

    </div>
  );
}

export default App;
