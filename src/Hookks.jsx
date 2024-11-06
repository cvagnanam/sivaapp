import React, {useEffect, useCallback, useState} from 'react';

function Home() {
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

const fetchdata = async() => {

// try{
//     const response = await fetch('http://jsonplaceholder.typicode.com/users');
//     const responseData = await response.json();
//     setData(responseData);

// } catch(error){
//     console.error("Fetch:", error.message);
//     setError(error.message)

// } finally{
//     setLoading(false);
// }



// fetch('http://jsonplaceholder.typicode.com/users')
// .then((response) => response.json())
// .then((responseData) => setData(responseData))
// .catch((error) => setError(error.message))
// .finally(() => setLoading(false));


const fetchuser =()=>{

    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if(!response.ok){
                reject('Network response was not ok')
            } else {
                return response.json();
            }
        })
        .then((result) => resolve(result))
        .catch((error) => reject(error.message))
    })

}
fetchuser()
.then((result) => setData(result))
.catch((error) => setError(error.message))
.finally(() => setLoading(false))

}


useEffect(() => {

    fetchdata();

}, []);


if(loading) return <p>Loading....</p>
if(error) return <p>Fetch:{error.message}</p>
  return (
<>

{data.map((item, index) => (
<div key={index}>
<div><strong>{item.name}</strong></div>
<div>{item.email}</div>
</div>
))}



</>

  );
}

export default Home;
