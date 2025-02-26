import React, { createContext, useContext, useState } from 'react';

// Create a context for dark mode
const DarkModeContext = createContext();

// Create a provider component
export const DarkModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

// Custom hook for using dark mode context
export const useDarkMode = () => {
    return useContext(DarkModeContext);
};