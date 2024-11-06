import React from 'react';
import { AppProvider } from './AppContext';
import ContextThree from './ContextThree';
import ContextTwo from './ContextTwo';
import ContextFour from './ContextFour';

const ContextOne = ()=> {

return(
<>
<AppProvider>
<ContextTwo />
<ContextThree />
<ContextFour />
</AppProvider>

</>

);
};

export default ContextOne;