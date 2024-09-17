import './BoardMember.css'; // For styling

// eslint-disable-next-line react/prop-types
const BoardMember = ({ name, title, description, image }) => {
  return (
    <div className="board-member">
      <img src={image} alt={name} className="board-image" />
      <div className="info-container">
        <div className="text-container">
          <h2>{title}</h2>
          <h3>{name}</h3>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BoardMember;
