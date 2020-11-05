import React from 'react';
import DefaultPage from '../../components/_layout/DefaultPage';
import BestSellers from '../../components/BestSellers';

const HomePage = () => {
    return (
        <DefaultPage>
            <BestSellers />
        </DefaultPage>
    )
}

export default HomePage;