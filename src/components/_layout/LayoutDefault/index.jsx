import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Container } from '@material-ui/core';
import './layoutDefault.scss';

const LayoutDefault = ({ children }) => {    
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

export default LayoutDefault;