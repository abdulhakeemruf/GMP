
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'> 
        <h1>Home</h1>
        <p>OUR VISION
        “To be an outstanding source of 
        professionalism in the Ummah and
         a benchmark for leadership skills and resources
          in the country.”</p>
          <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
