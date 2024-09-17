
import Slider from "react-slick";
import './Home.css'; // for custom styles
import Image1 from '../../assets/Hero.jpg'
import Image2 from '../../assets/ArcAdeboye.jpg'
import Image3 from '../../assets/Bello-300x300.jpg'
//import NavBar from '../../components/Navbar/Navbar'
const Home = () => {
  const settings = {
    dots: true, // enable dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // automatic sliding
    autoplaySpeed: 3000, // 3 seconds per slide
    fade: true, // adds a fade effect
    arrows: true // navigation arrows
  };

  const slides = [
    {
      image: Image1,
      text: "Slide 1 Text",
    },
    {
      image: Image2,
      text: "Slide 2 Text",
    },
    {
      image: Image3,
      text: "Slide 3 Text",
    }
  ];

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slider-item">
            <div
              className="slider-bg"
              style={{
                backgroundImage: `url(${slide.image})`
              }}
            >
              <div className="slider-content">
                <p>{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
