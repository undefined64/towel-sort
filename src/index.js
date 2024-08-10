// You should implement your task here.

module.exports = function towelSort(matrix) {
    const towelMatrix = [];

    if (!matrix || matrix.length === 0) {
        return towelMatrix;
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            towelMatrix.push(...matrix[i]);
        } else {
            towelMatrix.push(...matrix[i].reverse());
        }
    }
    return towelMatrix;
};
