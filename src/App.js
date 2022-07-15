import './App.css';
import ProductImageSlider from './component/productImageSlider/ProductImageSlider';
import {productImages} from './assets' 
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

function App() {
  return (
    <div className="main__container">
     <div className='main__container__right'>
      <ProductImageSlider  images = {productImages} />
     </div>
    </div>
  );
}

export default App;
