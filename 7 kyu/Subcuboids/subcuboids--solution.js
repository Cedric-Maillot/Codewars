/**
 * 
 * @param n {Int} Le dernier entier de la somme
 * @example
 * // returns 6
 * sommePremiersEntiers(3);
 * @returns {Int} La somme des premiers entiers jusqu'à n
 */
let sommePremiersEntiers = (n) => {
    return (n * (n + 1n)) / 2n;
};

/**
 * 
 * @param cube {Object} Un cube, défini par ses différentes dimensions
 * @example
 * // returns 27
 * nbSousCubes({"largeur": 2,"hauteur": 2,"profondeur": 2});
 * @returns {Int} Le nombre de sous-cubes distincts que l'on peut former à partir du cube
 */
let nbSousCubes = (cube) => {
    return sommePremiersEntiers(cube.largeur) * sommePremiersEntiers(cube.hauteur) * sommePremiersEntiers(cube.profondeur);
};

/**
 * 
 * @param largeur {Int} La largeur du cube
 * @param hauteur {Int} La hauteur du cube
 * @param profondeur {Int} La profondeur du cube
 * @example
 * // returns {"largeur": 2,"hauteur": 3,"profondeur": 3}
 * cube(2,3,3);
 * @returns {Object} Un cube, défini par ses différentes dimensions
 */
let cube = (largeur,hauteur,profondeur) => {
    return {largeur,hauteur,profondeur};
};

/* Main function */
function subcuboids(x,y,z) {
    return nbSousCubes(cube(x,y,z));
};
