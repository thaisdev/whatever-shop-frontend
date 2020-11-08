export function calcDeliveryDate (days) {
    let date = new Date();
    if (days && days > 0) {
        date.setDate(date.getDate()+days);
    }

    return date;
}