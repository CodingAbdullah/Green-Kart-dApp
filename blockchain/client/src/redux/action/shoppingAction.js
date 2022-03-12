export const shoppingAction = (payload) => {
    const length = payload.length;

    if (length) {
        return {
            type: 'REQUEST_CHECKOUT',
            payload
        }
    }
}