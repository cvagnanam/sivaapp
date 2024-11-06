import React from 'react';

const ChildTwo = React.memo(()=> {
    console.log("Child TWO rendering");
return <div>Child Two Componenet</div>


});

export default ChildTwo;