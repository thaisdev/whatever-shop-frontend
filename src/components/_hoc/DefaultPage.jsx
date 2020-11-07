import React from 'react';
import LayoutDefault from '../_layout/LayoutDefault';
import { ContextProvider } from '../_context/GlobalContext';
import useAxios from 'axios-hooks';

export default function DefaultHOC(Page) {
    function DefaultPage(props) {
        const [{ data: cartData }] = useAxios('/cart');

        const contextProps = {
            cartData
        }

        return (
            <ContextProvider {...contextProps}>
                <LayoutDefault>
                    <Page {...props} />
                </LayoutDefault>
            </ContextProvider>
        );
    }

    return DefaultPage;
}