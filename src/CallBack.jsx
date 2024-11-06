import React, {useCallback, useEffect, useState} from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

function CallBack(){
const [data, setData] = useState('');
const [count, setCount] = useState(0);
const [result, setResult] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const counts = useCallback(()=> {
    console.log("Count rendering");
    setCount((count) => count + 1 )
}, []);

const changeData = useCallback((e)=> {
    console.log("Data rendering");
    setData(e.target.value)
}, []);


const fetchData = async ()=> {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const responseData = await response.json();
        setResult(responseData)
    }catch(error){
        console.error("Fetch:", error.message);
        setError(error.message)
    } finally{
        setLoading(false)
    }
    
}

useEffect(() => {
    console.log("test message")
}, [data])

useEffect(() => {
    fetchData()
}, [count])
 
console.log("Parent rendering");

if(loading) return <p>Loading......</p>;
if(error) return <p>Fetch: {error}</p>;
    return(
        <>

        <ChildOne />
        <ChildTwo />
        
        <div>Input Value: {data}</div>

        <div>Count: {count}</div>
        
    <input type="text" value={data} onChange={changeData}/>

    <button onClick={counts}>Counter</button>

    {result.map((item, index) => (
        <div key={index}>{item.name}</div>
    ))}
        
        </>
    )
}



export default CallBack;