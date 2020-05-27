import React from 'react';
import Header from "../components/common/header";
import Footer from "../components/common/footer";
import { Container } from 'react-bootstrap';

const HomeLayout = ({ children, ...rest }) => {
    return (
      <Container>
        <Header />
        {children}
        <Footer />
      </Container>
    )
  }

export default HomeLayout;