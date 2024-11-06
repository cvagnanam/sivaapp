import React, {useContext, useState} from 'react';
import { AppContext } from './AppContext';


const ContextThree =()=>{
    const {text, setText} = useContext(AppContext);

    return(
        <>
        <div>

            <input value={text} type="text" onChange={(e) => setText(e.target.value)} />
        </div>
        
        </>
    )
}

export default ContextThree;