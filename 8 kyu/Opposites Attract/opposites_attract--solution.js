/**
 * 
 * @param nombre {Int}
 * @returns {Boolean} Le nombre est-il pair ?
 * @example
 * // returns true
 * estPair(2);
 */
let estPair = (nombre) => {
    return  nombre % 2 === 0 ? true
        :   false;
};

/* Main function */
function lovefunc (flower1,flower2) {
    return  estPair(flower1) ? !estPair(flower2)
        :   estPair(flower2);
};
