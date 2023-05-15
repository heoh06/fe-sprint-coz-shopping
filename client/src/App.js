import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ItemList from './components/ItemList'

function App() {
  return (
    <>
    <Header/>
    <section className='main_section_product'>
      <h2>상품 리스트</h2>
      <ItemList/>
    </section>
    <section className='main_section_bookmark'>
      <h2>북마크 리스트</h2>
    </section>
    <Footer/>
    </>
  );
}

export default App;
