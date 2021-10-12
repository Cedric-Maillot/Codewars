/**
 * 
 * @param mot {String}
 * @example
 * // returns ["H","e","l","l","o"]
 * lettres("Hello");
 * @returns {Array} Les lettres du mot
 */
let lettres = (mot) => {
    return mot.split("");
};

/**
 * 
 * @param mot {String}
 * @example
 * // returns "olleH"
 * inverse("Hello");
 * @returns {String} Le mot inversé
 */
let inverse = (mot) => {
    return lettres(mot).reverse().join("");
};

/**
 * 
 * @param mot {String}
 * @example
 * // returns "hello"
 * minuscule("HeLlo");
 * @returns {String} Le mot en minuscule
 */
let minuscule = (mot) => {
    return mot.toLowerCase();
};

/* Main function */
function isPalindrome(x) {
    return  minuscule(x) === minuscule(inverse(x)) ? true
        :   false;
};
