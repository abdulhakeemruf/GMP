

import Image1 from '../../assets/Hero.jpg'
import Image2 from '../../assets/ArcAdeboye.jpg'
import Image3 from '../../assets/Bello-300x300.jpg'

const ContactUs = () => {
  const items = [
    {
      image: Image1,
      text: "This is the first item",
    },
    {
      image: Image2,
      text: "This is the second item",
    },
    {
      image: Image3,
      text: "",
    }
  ];

  return (
    <div className="list-container">
      {items.map((item, index) => (
        <div key={index} className="list-item">
          <img src={item.image} alt={`Item ${index}`} className="item-image" />
          <p className="item-text">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactUs;