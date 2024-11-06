import React, {createContext, useState} from "react";

export const AppContext = createContext();

export const AppProvider =({children})=> {

    const [text, setText] = useState('React App');

    return(
        <AppContext.Provider value={{text, setText}}>
            {children}
        </AppContext.Provider>
    )

}