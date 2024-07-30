import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-contrast-high shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-red-500">Airbnb Clone</div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="text-contrast-medium hover:text-contrast-high">Home</Link></li>
            <li><Link to="/explore" className="text-contrast-medium hover:text-contrast-high">Explore</Link></li>
            <li><Link to="/my-trips" className="text-contrast-medium hover:text-contrast-high">My Trips</Link></li>
            <li><Link to="/login" className="text-contrast-medium hover:text-contrast-high">Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;