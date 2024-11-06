import React from 'react';

const ChildOne = React.memo(() => {

console.log("Child One rendering");

return <div>Child ONe Component</div>


});

export default ChildOne;