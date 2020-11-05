const formatCurrency = value => {
    if (value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency', 
            currency: 'BRL'
        }).format(value);
    }

    return 'R$ 0,00';
}

export {
    formatCurrency
}