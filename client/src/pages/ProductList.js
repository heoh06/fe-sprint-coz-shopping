import React from 'react';
import Category from '../components/Category';
import Card from '../components/Card'
import {useState} from 'react'

function ProductList(){
    const items = localStorage.getItem('items');
    const itemInfo = JSON.parse(items);
    const [index, setIndex] = useState("All")

    const productItem = itemInfo.filter(itemInfo => itemInfo.type === "Product");
    const categoryItem = itemInfo.filter(itemInfo => itemInfo.type === "Category");
    const exhibitionItem = itemInfo.filter(itemInfo => itemInfo.type === "Exhibition");
    const brandItem = itemInfo.filter(itemInfo => itemInfo.type === "Brand");

    if(!itemInfo) return <div> Loading </div>
    return(
        <>
            <Category setIndex={setIndex} />
            <section className="product_list_section">
                <ul className="cardlist_wrap productlist_wrap">
                    {index === "All" ? itemInfo.map((itemInfo)=>(<Card itemInfo={itemInfo} key={itemInfo.id}/>)) : null}
                    {index === "Product" ? productItem.map((productItem)=>(<Card itemInfo={productItem} key={productItem.id}/>)) : null}
                    {index === "Category" ? categoryItem.map((categoryItem)=>(<Card itemInfo={categoryItem} key={categoryItem.id}/>)): null}
                    {index === "Marketing" ? exhibitionItem.map((exhibitionItem)=>(<Card itemInfo={exhibitionItem} key={exhibitionItem.id}/>)) :null}
                    {index === "Brand" ?  brandItem.map((brandItem)=>(<Card itemInfo={brandItem} key={brandItem.id}/>)):null}

                </ul>
            </section>
        </>
    )
}

export default ProductList;