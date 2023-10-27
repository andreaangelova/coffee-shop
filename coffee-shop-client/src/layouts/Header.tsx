import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="nav">
        <div className="text-centered">
            <Link to='/' id="logo"><h2>Coffee Shop</h2></Link>
        </div>
    </header>
  );
};

export default Header;