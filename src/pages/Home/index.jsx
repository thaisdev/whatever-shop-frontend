import React from 'react';
import BestSellers from '../../components/BestSellers';
import DefaultPage from '../../components/_hoc/DefaultPage';

const HomePage = () => {
    return <BestSellers />
}

export default DefaultPage(HomePage);