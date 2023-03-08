
export const themeMode = (t) => {
    if (t === 'light') {
        return 'dark'
    } else {
        return 'light'
    }
}

export const productIncrease = (count, stock) => {
    if (count < stock) {
        return count + 1;
    } else {
        return count;
    }
}

export const productDecrease = (count) => {
    if(count > 1) {
        return count - 1;
    } else {
        return 1
    }
}

export const priceTotal = (p, c) => {
    return p * c;
}