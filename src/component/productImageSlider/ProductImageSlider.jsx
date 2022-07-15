import React, {useState} from 'react'
import './ProductImageSlider.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'


const ProductImageSlider = (props) => {
  // const [activeThumbs, setActiveThumbs] = useState()
  const [activeThumbs] = useState()
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs = {{swiper: activeThumbs}}
        className="product-image-slider"
      >
        {

          props.imT.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt="Product" className='productImT'/>
              {/* <input type="image" img src = {item} alt="photo" /> */}


            </SwiperSlide>
          ))
        }
      </Swiper>

      <Swiper
        // onSwiper={{setActiveThumbs}}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        modules={[Navigation, Thumbs]}
        className="product-image-slider-thumbs"
      >
        {

          props.imT.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='product-image-slider-thumbs-wrapper'>
                <img src={item} alt="Product" className='productImT' />
                {/* <input type="image" img src = {item} alt="photo" /> */}
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}

export default ProductImageSlider