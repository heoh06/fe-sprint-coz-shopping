import React from 'react';
import Card from './Card'

function Category({index, setIndex}){

    function indexHandler(type){
        setIndex(type)
    }
    

    return(
        <section className='category_section'>
            <ul className='category_wrap'>
                <li onClick={()=>indexHandler("All")} className='category'>전체</li>
                <li onClick={()=>indexHandler("Product")} className='category'>상품</li>
                <li onClick={()=>indexHandler("Category")} className='category'>카테고리</li>
                <li onClick={()=>indexHandler("Marketing")} className='category'>기획전</li>
                <li onClick={()=>indexHandler("Brand")} className='category'>브랜드</li>
            </ul>
        </section>
    )
}

export default Category;