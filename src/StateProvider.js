import React, { createContext, useContext, useReducer } from "react";

// We need it to track basket



// This is the data layer
export const StateContext = createContext()

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)