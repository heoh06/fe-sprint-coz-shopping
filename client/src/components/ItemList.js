import React from 'react';
import Card from './Card'
import {useState, useEffect} from 'react'
import axios from 'axios'

function ItemList(){
    const [data, setData] = useState([]);
	
    useEffect(() => {
        const fetchData = async() => {
        const res = await axios.get('http://cozshopping.codestates-seb.link/api/v1/products');
        console.log(res)
        return res.data;
        }	
    
        fetchData().then(res => setData(res));
    }, []);

    return(
        <ul className='cardlist_wrap'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ul>
    )
}

export default ItemList;