import React from "react";
import Card from "./Card";

function MainItemList({items}) {


return (
<ul className="cardlist_wrap">
    {items.map((itemInfo) => (<Card itemInfo={itemInfo} key={itemInfo.id} />))}
</ul>
);
}

export default MainItemList;