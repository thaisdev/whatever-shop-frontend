const formatCurrency = value => {
    if (value) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency', 
            currency: 'BRL'
        }).format(value);
    }

    return 'R$ 0,00';
}

const formatDateBr = date => {
    if (date) {
        return date.toLocaleDateString();
    }

    return '';
}

export {
    formatCurrency,
    formatDateBr
}