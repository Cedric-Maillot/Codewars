/**
 * 
 * @param nombre {Int}
 * @returns {Array} Les chiffres stringifiés d'un nombre
 * @example
 * // returns ["1","4","5"]
 * chiffresStringifies(145);
 */
let chiffresStringifies = (nombre) => {
    return nombre.toString().split("");
};

/**
 * 
 * @param nombre {Int}
 * @returns {Array} Les chiffres d'un nombre
 * @example
 * // returns [1,4,5]
 * chiffres(145);
 */
let chiffres = (nombre) => {
    return chiffresStringifies(nombre).map((chiffre) => {
        return parseInt(chiffre);
    });
};

/**
 * 
 * @param chiffres {Array}
 * @returns {Array} Les carrés des chiffres
 * @example
 * // returns [1,16,25]
 * carres([1,4,5]);
 */
let carres = (chiffres) => {
    return chiffres.map((chiffre) => {
        return Math.pow(chiffre,2);
    });
};

/**
 * 
 * @param chiffres {Array}
 * @returns {Array} Les chiffres stringifiés
 * @example
 * // returns ["1","16","25"]
 * stringifies([1,16,25]);
 */
let stringifies = (chiffres) => {
    return chiffres.map((chiffre) => {
        return chiffre.toString();
    });
};

/**
 * 
 * @param chiffres {Array}
 * @returns {Int} Un nombre résultant de la concaténation des chiffres
 * @example
 * // returns 11625
 * concatenation([1,16,25]);
 */
let concatenation = (chiffres) => {
    return parseInt(stringifies(chiffres).join(""));
};

/* Main function */
function squareDigits (num) {
    return concatenation(carres(chiffres(num)));
};
