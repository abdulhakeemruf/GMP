

import Image1 from '../../assets/Hero.jpg'
import Image2 from '../../assets/ArcAdeboye.jpg'
import Image3 from '../../assets/Bello-300x300.jpg'

const Program = () => {
  const items = [
    {
      id : "post1",
      image: Image1,
      text: "This is the first item",
    },
    {
      id:"post2",
      image: Image2,
      text: "This is the second item",
    },
    {
      id: "post3",
      image: Image3,
      text: "",
  
    },
    {
      id: "post4",
      image: Image3,
      text: "",
  
    }
  ];

  return (
    <div className="list-container">
      {items.map((item, index) => (
        <div key={index} id={item.id} className="list-item">
          <img src={item.image} alt={`Item ${index}`} className="item-image" />
          <p className="item-text">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Program;