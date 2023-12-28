import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';



import Header from 'components/Header/Header';
import { Container, Main, MainWrapper } from './Layout.styled';


function Layout() {
  return (
    <MainWrapper>
    
    
      <Header />
     
      <Main>
        <Container>
        <Suspense >
            <Outlet />
            </Suspense>
        </Container>
      </Main>
   
    </MainWrapper>
  );
}

export default Layout;
