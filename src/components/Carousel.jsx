
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
  const navigate= useNavigate()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="carousel-container d-none d-md-block">
      <Slider {...settings}>
        <div>
          <img
            onClick={()=>navigate("/tecno")}
            src="infinix.png"
            alt="Slide 1"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="phone1.PNG"
            alt="Slide 2"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="infinix2.png"
            alt="Slide 3"
            className="carousel-image"
          />
        </div>
        {/* <div>
          <img
            src="11.PNG"
            alt="Slide 4"
            className="carousel-image"
            style={{
            height: '200px',
            objectFit: 'contain',
            }}
          />
        </div> */}
        {/* <div>
          <img
            src="phone5.PNG"
            alt="Slide 5"
            className="carousel-image"
          />
        </div> */}
      </Slider>
    </div>
  );
};

export default Carousel;