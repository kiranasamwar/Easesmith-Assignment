import './App.css';
// import LeafDetails from './components/LeafDetails/LeafDetails';
import Navbar from './components/Navbar/Navbar';
// import ThankYouCart from './components/ThankYouCart/ThankYouCart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import ThankYouPage from './components/ThankYouPage/ThankYouPage';
import Footer from './components/Footer/Footer';
// import SwiperSlides from './components/SwiperSlides/SwiperSlides';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <SwiperSlides /> */}
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
