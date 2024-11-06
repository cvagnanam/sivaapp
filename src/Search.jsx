import React, {useState} from 'react';


const Search =()=> {
    const [query, setQuery] = useState('');
    const [item, setItem] = useState('');
    const [value, setValue] = useState(['Apple']);

    const filtered = value.filter(item => item.toLowerCase().startsWith(query.toLowerCase()));

    const Additem =()=>{
        setValue([...value, item]);
        setItem('')
    }
    const keypes =(e)=> {
        if(e.key === 'Enter') {
            Additem();
        }
    }


    return(
        <>
        <input type='text' value={item} onChange={(e)=>setItem(e.target.value)} onKeyPress={keypes} placeholder='additem'/>
        <button onClick={Additem}>Add Item</button>
        <input type='text' value={query} onChange={(e)=>setQuery(e.target.value)} placeholder='Search....'/>

        {filtered.map((item, index) => (
            <div key={index}>{item}</div>
        ))}
        
        </>
    )
}

export default Search;