class MagicSquareService {
    public static isMagicSquare(matrix: number[][]): boolean {
        const n = matrix.length;
        const targetSum = (n * (n * n + 1)) / 2;
      
        for (let i = 0; i < n; i++) {
          let rowSum = 0;
          for (let j = 0; j < n; j++) {
            rowSum += matrix[i][j];
          }
          if (rowSum !== targetSum) {
            return false;
          }
        }
      
        for (let j = 0; j < n; j++) {
          let colSum = 0;
          for (let i = 0; i < n; i++) {
            colSum += matrix[i][j];
          }
          if (colSum !== targetSum) {
            return false;
          }
        }

        let diagonalSum = 0;
        for (let i = 0; i < n; i++) {
          diagonalSum += matrix[i][i];
        }
        if (diagonalSum !== targetSum) {
          return false;
        }
      
        diagonalSum = 0;
        for (let i = 0; i < n; i++) {
          diagonalSum += matrix[i][n - 1 - i];
        }
        if (diagonalSum !== targetSum) {
          return false;
        }
      
        return true;
      }
  }
  
  export default MagicSquareService;
  