
import { Link, Navi } from './Navigation.styled';

const Navigation = () => {
  return (
    <Navi>
      <Link to="/">
        
        <p>Home</p>
      </Link>
      <Link to="/teachers">
        
        <p>Teachers</p>
      </Link>
      
    </Navi>
  );
};

export default Navigation;
