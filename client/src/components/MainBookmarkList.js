import React from 'react';
import Card from './Card'

function MainBookmarkList ({data}){
    return(
        <ul>
            <Card data={data}/>
        </ul>
    )
}

export default MainBookmarkList;