import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './pages/MainPage'
import {useState} from 'react'

function App() {
  const [bookmark, setBookmark] = useState(false);

  return (
    <>
    <Header/>
    <MainPage bookmark={bookmark} setBookmark={setBookmark}/>
    <Footer/>
    </>
  );
}

export default App;
