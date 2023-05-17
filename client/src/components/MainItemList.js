import React from 'react';
import Card from './Card'

function ItemList({data}){

    return(
        <ul className='cardlist_wrap'>
            {data.map(()=><Card data={data}/>)}
        </ul>
    )
}

export default ItemList;