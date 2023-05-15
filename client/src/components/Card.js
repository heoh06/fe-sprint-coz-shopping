import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Card() {
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
            <li className='card_box'>
            <div className='img_wrap'>
                <img src={data[0].image_url} alt={data.title} className='card_img' />
                <button className='icon_bookmark bookmark_off'>    
                </button>
        </div>
            <div className='card_titles'>
                <h3 className='card_title'>{data[0].title}</h3>
                <h3 className='card_title'>{data[0].brand_name}</h3>
                <span className='card_subtitle'>{data[0].discountPercentage}</span>
                <span className='card_subtitle'>{data[0].type === "Brand" ? "관심고객수" : ""}</span>
            </div>
            <div className='card_details'>
                <p className='card_detail_left'>{data[0].subtitle}</p>
                <p className='card_detail_right'>{data[0].price}</p>
                <p className='card_detail_right'>{data[0].follower}</p>
            </div>
            </li>
    )
}

export default Card;