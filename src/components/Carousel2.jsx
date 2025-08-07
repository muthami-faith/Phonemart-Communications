
import Slider from 'react-slick';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { useNavigate } from 'react-router-dom';

const Carousel2 = () => {
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
    <div className="carousel-container">
      <Slider {...settings}>
        
        <div>
          <img
            src="acc3.PNG"
            alt="Slide 3"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="acc4.PNG"
            alt="Slide 4"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="acc5.PNG"
            alt="Slide 5"
            className="carousel-image"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel2;