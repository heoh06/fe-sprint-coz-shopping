import React from 'react';
import {useState} from 'react';

function Card({data}) {
    const [bookMarkIcon, setbookMarkIcon] = useState(false);
	function toggleBookmark(){
        setbookMarkIcon(bookMarkIcon => !bookMarkIcon)
    }

    const [bookmark, setBookmark] = useState([]);
    const saveBookmark = (obj) => {
        const itemIdx = bookmark.findIndex((item)=>item.id===obj.id);
        let updateBookmark;
        if (itemIdx === -1){
            updateBookmark = [obj,...bookmark]
        } else{
            updateBookmark = bookmark.filter((item)=>item.id===obj.id)
        }
        setBookmark(updateBookmark);
        localStorage.setItem("bookmark", JSON.stringify(updateBookmark))
    }

    return(
            <li className='card_box'>
            <div className='img_wrap'>
                <img src={data.type === "Brand" ? data.brand_image_url : data.image_url} alt={data.title} className='card_img' />
                <button className={bookMarkIcon ? 'icon_bookmark bookmark_on' :'icon_bookmark bookmark_off'}
                onClick={(e) => {toggleBookmark(); saveBookmark(data)}}>    
                </button>
        </div>
            <div className='card_titles'>
                <h3 className='card_title'>{data.title}</h3>
                <h3 className='card_title'>{data.brand_name}</h3>
                <span className='card_subtitle'>{data.discountPercentage}</span>
                <span className='card_subtitle'>{data.type === "Brand" ? "관심고객수" : ""}</span>
            </div>
            <div className='card_details'>
                <p className='card_detail_left'>{data.subtitle}</p>
                <p className='card_detail_right'>{data.price}</p>
                <p className='card_detail_right'>{data.follower}</p>
            </div>
            </li>
    )
}

export default Card;