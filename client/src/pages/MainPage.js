import React from "react";
import MainItemList from "../components/MainItemList";
import MainBookmarkList from "../components/MainBookmarkList";
import { useEffect, useState } from "react";
import axios from "axios";

function MainPage() {
    const [data, setData] = useState([]);
    const [bookmarkedItems, setBookmarkedItems] = useState([]);
    const [unBookmarkedItems, setUnBookmarkedItems] = useState([]);

    function saveItemsDataToLocalStorage(items) {
    localStorage.setItem("items", JSON.stringify(items));
    }

    function saveBookmarkDataToLocalStorage(items){
        localStorage.setItem("updatedItems", JSON.stringify(items));
    }

    function getItemsDataFromLocalStorage() {
    const items = localStorage.getItem("items");
    return JSON.parse(items);
    }
    function getItemsBookmarkFromLocalStorage() {
        const items = localStorage.getItem("updatedItems");
        return JSON.parse(items);
        }

    useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(
        "http://cozshopping.codestates-seb.link/api/v1/products",
        );
        const data = await response.data;
        return data;
    };

    fetchData().then((result) => setData(result));
    }, []);
    
    saveItemsDataToLocalStorage(data);

    useEffect(() => {
    const localItems = getItemsDataFromLocalStorage();
    const bookmarkedItems = getItemsBookmarkFromLocalStorage();
    const unBookmarkedItems = localItems.filter(
        (item) => !item.isBookmarked || item.isBookmarked === undefined
    );
    setUnBookmarkedItems(unBookmarkedItems);
    setBookmarkedItems(bookmarkedItems)
    }, [data]);

    return (
        <>
        <section className="main_section_product">
            <h2>상품 리스트</h2>
            <MainItemList items={unBookmarkedItems} />
        </section>
        <section className="main_section_bookmark">
            <h2>북마크 리스트</h2>
            <MainBookmarkList items={bookmarkedItems} />
        </section>
        </>
    );
}

export default MainPage;