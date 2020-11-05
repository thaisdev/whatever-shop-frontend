import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Container } from '@material-ui/core';
import './defaultPage.scss';

const DefaultPage = ({ children }) => {
    return (
        <>
            <Header />
            <Container className="default-page__container">
                {children}
            </Container>
            <Footer />
        </>
    )
}

export default DefaultPage;