import React from 'react';
import {useState, useEffect} from 'react';

function Card({itemInfo}) {
    const [isBookmarked, setBooked] = useState(false);

	function toggleBookmark(){
        setBooked(isBookmarked => !isBookmarked)
        if(itemInfo.isBookmarked = true){
            itemInfo.isBookmarked = false;
        } else{
            itemInfo.isBookmarked = true;
        }
        // const bookmarkedItem = JSON.parse(localStorage.getItem("updatedItems")) || [];
        // if(itemInfo.isBookmarked === true){
        //     bookmarkedItem.push(itemInfo)
        // }
        // localStorage.setItem("updatedItems",JSON.stringify(bookmarkedItem))
        localStorage.setItem("items",JSON.stringify(itemInfo))
    }

    useEffect(()=>{
        const bookmarkedItem = JSON.parse(localStorage.getItem("updatedItems")) || [];
        if(itemInfo.isBookmarked === true){
            bookmarkedItem.push(itemInfo)
        }
        setBooked(bookmarkedItem)
        localStorage.setItem("updatedItems", JSON.stringify(bookmarkedItem))
    },[itemInfo])

    // useEffect(() => {
    //     function saveBookmarkStateToLocalStorage() {
    //         const localItems = localStorage.getItem("items");
    //         const parsedItems = JSON.parse(localItems);
    //         console.log(parsedItems)
    //         const updatedItems = parsedItems.filter((item) =>
    //         item.isBookmarked === true
    //         );
    //         localStorage.setItem("updatedItems", JSON.stringify(updatedItems));
    //     }
        // function removeBookmarkStateFromLocalStorage() {
        //     const localItems = localStorage.getItem("items");
        //     const parsedItems = JSON.parse(localItems);
        //     const updatedItems = parsedItems.map((item) =>
        //     item.id === itemInfo.id ? { ...itemInfo, isBookmarked:false} : item
        //     );
        //     localStorage.setItem("items", JSON.stringify(updatedItems));
        // }
        // if (setBooked) {
        //     saveBookmarkStateToLocalStorage("updatedItems");
        // } 
        // else {
        //     removeBookmarkStateFromLocalStorage();
        // }
    // }, [isBookmarked, itemInfo]);

    if(!itemInfo) return;

    return(
            <li className='card_box'>
            <div className='img_wrap'>
                <img src={itemInfo.type === "Brand" ? itemInfo.brand_image_url : itemInfo.image_url} alt={itemInfo.title} className='card_img' />
                <button className={itemInfo.isBookmarked === true? 'icon_bookmark bookmark_on' :'icon_bookmark bookmark_off'}
                onClick={(e) => {toggleBookmark();}}
                >    
                </button>
        </div>
            <div className='card_titles'>
                <h3 className='card_title'>{itemInfo.title}</h3>
                <h3 className='card_title'>{itemInfo.brand_name}</h3>
                <span className='card_subtitle'>{itemInfo.discountPercentage}</span>
                <span className='card_subtitle'>{itemInfo.type === "Brand" ? "관심고객수" : ""}</span>
            </div>
            <div className='card_details'>
                <p className='card_detail_left'>{itemInfo.subtitle}</p>
                <p className='card_detail_right'>{itemInfo.price}</p>
                <p className='card_detail_right'>{itemInfo.follower}</p>
            </div>
            </li>
    )
}

export default Card;