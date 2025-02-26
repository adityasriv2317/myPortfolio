import React, { createContext, useContext, useState } from 'react';

// context for web page properties
const WebContext = createContext();

// Create a provider component
export const WebProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    }

    return (
        <WebContext.Provider value={{ darkMode, setDarkMode, currentPage, setCurrentPage, toggleDarkMode }}>
            {children}
        </WebContext.Provider>
    );
};

// custom hook to use the context
export const useWebContext = () => useContext(WebContext);