import React from 'react';
import { Container,NavContainer,PageContainer,FooterContainer} from '../../styles';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';


const PageLayout = () => {
  return (
    <Container>
      <NavContainer>
        <Header/>
      </NavContainer>
      <PageContainer>
        <Outlet/>
      </PageContainer>
      <FooterContainer>
        <Footer/>
      </FooterContainer>
    </Container>
  )
}

export default PageLayout
