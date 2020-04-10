import React from 'react';
import BookContextProvider from './contexts/bookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookForm from './components/BookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
