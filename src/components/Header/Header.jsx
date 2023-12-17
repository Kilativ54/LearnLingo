import { Container } from "./Header.styled";
import Nav from "components/Nav/Nav";
import AuthNav from "components/AuthNav/AuthNav";
import Logo from "components/Logo/Logo";

const Header = () => {
  

  return (
    <Container>
      <Logo/>
       
        <>
          <div style={{ display: 'flex', gap: '40px' }}>
            <Nav />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
             <AuthNav />
          </div>
        </>
      
    </Container>
  );
};

export default Header;