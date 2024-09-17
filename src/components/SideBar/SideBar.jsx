
import './SideBar.css'; // For styling
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="search-box">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="recent-posts">
        <h3>Recent Posts</h3>
        <ul>
          <li><Link to="/program#post1">GMP October 1st Convention 2021</Link></li>
          <li><Link to="/program#post2">Who Is Your Mentor?</Link></li>
          <li><Link to= "/program#post3">GMP October 1st Convention</Link></li>
          <li><Link to= "/program#post4">Webinar to enlighten Muslims</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
