import MagicSquareService from "./services/MagicSquareService";

describe('MagicSquareService', () => {
    it('should return true for a valid magic square', () => {
      const matrix = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 3, 8],
      ];
      const result = MagicSquareService.isMagicSquare(matrix);
      expect(result).toBeTruthy();
    });
  
    it('should return false for an invalid magic square', () => {
      const matrix = [
        [2, 7, 6],
        [9, 5, 1],
        [4, 8, 3], // Invalid row
      ];
      const result = MagicSquareService.isMagicSquare(matrix);
      expect(result).toBeFalsy();
    });
  });
