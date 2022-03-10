import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import BookInfo from './Pages/BookInfo';
import {bookContext} from './Contexts/Context'
import book from './data.json'
function App() {
  return (
    <bookContext.Provider value={book}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/book/:bookID' element={<BookInfo />} />
        </Routes>
      </Router>
      </bookContext.Provider>
  );
}

export default App;
