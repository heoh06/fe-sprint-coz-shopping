import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage'
import ProductList from './pages/ProductList'
import BookmarkList from './pages/BookmarkList'
import {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>} />
          <Route path='/product/list' element={<ProductList/>}/>
          <Route path='/bookmark' element={ <BookmarkList/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
