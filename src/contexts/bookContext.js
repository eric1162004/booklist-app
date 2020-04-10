import React, {createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    // the third arg of useReducer takes a fXN that return a defualt initial value
    const [ books, dispatch ] = useReducer(bookReducer, [], ()=>{
        const localData  = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });

    // Update the localstorage data whenever book items are changed
    useEffect(()=>{
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    return (
        <BookContext.Provider value={{books, dispatch}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;


