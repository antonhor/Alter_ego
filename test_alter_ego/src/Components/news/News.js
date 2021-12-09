import React, { useState, useEffect } from 'react';
function News() {
    const [type, setType] = useState('type')
    const [data, setData] = useState()
    
        
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/todos/1/posts')
        .then(response => response.json())
        .then(json => setData(json))
    }, [type])
    console.log(data)
    let res
    if(data !== undefined) {
        res = data.map(el => (<li>{el.body}</li>))
    }
  return (
    <div className="News">
        <ul>{res}</ul>
    </div>
  );
}

export default News;