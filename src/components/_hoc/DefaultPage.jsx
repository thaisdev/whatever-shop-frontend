import React, { useState } from 'react';
import LayoutDefault from '../_layout/LayoutDefault';
import { ContextProvider } from '../_context/GlobalContext';
import useAxios from 'axios-hooks';
import SnackbarProvider from '../_layout/SnackbarProvider';

export default function DefaultHOC(Page) {
    function DefaultPage(props) {
        const [snackProps, setSnackProps] = useState({
            show: false,
            message: '',
            type: null
        });
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

        const addToCart = item => {
            addItemToCart({
                data: {...item, quantity: 1, totalPrice: item.price}
            }).then(resp => {
                if (resp.status === 201) {
                    showAlertSuccess('Item adicionado ao carrinho com sucesso!');
                    refetch();
                } else {
                    showAlertError('Falha ao adicionar item ao carrinho');
                }
            }).catch(err => {
                showAlertError(err?.message || 'Falha ao adicionar item ao carrinho');
            });
        }

        const showAlertSuccess = message => {
            setSnackProps({
                show: true,
                message,
                type: 'success'
            });
        }

        const showAlertError = message => {
            setSnackProps({
                show: true,
                message,
                type: 'error'
            });
        }

        const contextProps = {
            cartData,
            addToCart,
            refetchCart: refetch,
            showAlertSuccess,
            showAlertError
        }

        return (
            <ContextProvider {...contextProps}>
                <LayoutDefault>
                    <Page {...props} />
                    {
                        snackProps.show &&
                        <SnackbarProvider {...snackProps} onClose={
                            () => setSnackProps({...snackProps, show: false})
                        } />
                    }
                </LayoutDefault>
            </ContextProvider>
        );
    }

    return DefaultPage;
}