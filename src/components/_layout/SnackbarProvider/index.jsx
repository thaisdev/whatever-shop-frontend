import React, { useState, useEffect, useRef } from 'react';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const SnackbarProvider = ({ show, message, type, onClose }) => {
    const [open, setOpen] = useState(show);
    const prevShowRef = useRef();

    useEffect(() => {
        prevShowRef.current = open;
        if (prevShowRef.current && open !== show) {
            setOpen(show);
        }
    }, [show]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        onClose(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert elevation={6} variant="filled" onClose={handleClose} severity={type}>
                {message}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarProvider;