
import { Outlet } from 'react-router-dom';



import Header from 'components/Header/Header';
import { Container, Main, MainWrapper } from './Layout.styled';


function Layout() {
  return (
    <MainWrapper>
    
    
      <Header />
     
      <Main>
        <Container>
         
            <Outlet />
      
        </Container>
      </Main>
   
    </MainWrapper>
  );
}

export default Layout;
