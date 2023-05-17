import React from 'react';
import MainItemList from '../components/MainItemList'
import MainBookmarkList from '../components/MainBookmarkList'
import { useState, useEffect } from 'react';
import axios from 'axios';

function MainPage(){
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
        <>
        <section className='main_section_product'>
            <h2>상품 리스트</h2>
            <MainItemList data={data}/>
        </section>
        <section className='main_section_bookmark'>
            <h2>북마크 리스트</h2>
            <MainBookmarkList data={data}/>
        </section>
        </>
    )
}

export default MainPage;