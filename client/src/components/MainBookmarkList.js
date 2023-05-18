import React from 'react';
import Card from './Card'

function MainBookmarkList ({items}){
    if(!items) return <div>아직 북마크가 없서용</div>
    return(
        <ul className="cardlist_wrap">
            {items.map((itemInfo) => (<Card itemInfo={itemInfo} key={itemInfo.id} />))} 
        </ul>
    )
}

export default MainBookmarkList;