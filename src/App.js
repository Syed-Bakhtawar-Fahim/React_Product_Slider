import './App.css';
import ProductImageSlider from './component/productImageSlider/ProductImageSlider';
import {productImT} from './assets' 
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

function App() {
  return (
    <div className="main__container">
     <div className='main__container__right'>
      <ProductImageSlider  imT = {productImT} />
     </div>
    </div>
  );
}

export default App;
