import React from 'react';
import Card from './Card'

function ItemList({data}){

    return(
        <ul className='cardlist_wrap'>
            <Card data={data}/>
            <Card data={data}/>
            <Card data={data}/>
            <Card data={data}/>
        </ul>
    )
}

export default ItemList;