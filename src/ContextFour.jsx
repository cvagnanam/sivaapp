import React, {useContext} from 'react';
import { AppContext } from './AppContext';

const ContextFour =()=> {
const{text} = useContext(AppContext);
    return(
        <>
        <div>{text}</div>
        </>
    )

}

export default ContextFour;