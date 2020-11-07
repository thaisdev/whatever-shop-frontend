import React from 'react';
import LayoutDefault from '../_layout/LayoutDefault';
import { ContextProvider } from '../_context/GlobalContext';
import useAxios from 'axios-hooks';

export default function DefaultHOC(Page) {
    function DefaultPage(props) {
        const [{ data: cartData }, refetch] = useAxios('/cart');
        const [{ data: addItemCart, loading: loadingAdd },
            addItemToCart
        ] = useAxios(
            {
              url: '/cart',
              method: 'POST'
            },
            { manual: true }
        );

        const addToCart = data => {
            addItemToCart({data}).then(resp => {
                if (resp.status === 201) {
                    refetch();
                }
            });
        }

        const contextProps = {
            cartData,
            addToCart
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