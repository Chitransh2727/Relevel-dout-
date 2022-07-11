
function spiralMatrix(matrix) {
    let minr = 0;
    let minc = 0;

    let maxr = matrix.length - 1;
    let maxc = matrix[0].length - 1;

    let noOfElements = matrix.length * matrix[0].length;
    let count = 0
    // left wall
    while (count < noOfElements) {
        for (let i = minr; i <= maxr && count < noOfElements; i++) {
            console.log(matrix[i][minc]);
            count++;
        }
        minc++;

        // bottom wall
        for (let i = minc; i <= maxc && count < noOfElements; i++) {
            console.log(matrix[maxr][i]);
            count++;
        }
        maxr--;

        // right wall
        for (let i = maxr; i >= minr && count < noOfElements; i--) {
            console.log(matrix[i][maxc]);
            count++;
        }
        maxc--;

        // top wall
        for (let i = maxc; i >= minc && count < noOfElements; i--) {
            console.log(matrix[minr][i]);
            count++;
        }
        minr++;
    }
}

console.log(spiralMatrix([
    [1, 2, 3, 10],
    [4, 5, 6, 11],
    [7, 8, 15, 25]]))
