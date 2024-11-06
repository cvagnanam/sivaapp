import React, {useContext} from 'react';
import { AppContext } from './AppContext';

const ContextTwo = () => {
const {text} = useContext(AppContext);
return(
    <>
    <div>{text}</div>
    </>
)
}

export default ContextTwo;