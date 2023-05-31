import React, { useState } from 'react';
import { IonButton, IonInput, IonItem, IonLabel } from '@ionic/react';

interface MagicSquareFormProps {
  onCheck: (matrix: number[][]) => void;
}

const MagicSquareForm: React.FC<MagicSquareFormProps> = ({ onCheck }) => {
  const [matrixSize, setMatrixSize] = useState(3);
  const [matrix, setMatrix] = useState<number[][]>([]);

  const handleMatrixSizeChange = (event: CustomEvent) => {
    const size = parseInt(event.detail.value, 10);
    setMatrixSize(size);
    const randomMatrix = Array(size).fill([]).map(() => Array(size).fill(0)).map(row => row.map(() => Math.floor(Math.random() * 10)));
    setMatrix(randomMatrix);
  };

  const handleCellValueChange = (event: CustomEvent, row: number, col: number) => {
    const value = parseInt(event.detail.value, 10);
    const updatedMatrix = [...matrix];
    updatedMatrix[row][col] = value;
    setMatrix(updatedMatrix);
  };

  const handleSubmit = () => {
    onCheck(matrix);
  };

  return (
    <form>
      <IonItem>
        <IonLabel position="floating">Розмірність матриці (N x N)</IonLabel>
        <IonInput
          type="number"
          value={matrixSize}
          onIonChange={handleMatrixSizeChange}
        ></IonInput>
      </IonItem>

      {matrix.map((row, rowIndex) => (
        <div key={rowIndex}>
          {row.map((cell, colIndex) => (
            <IonItem key={`${rowIndex}-${colIndex}`}>
              <IonLabel>Елемент [{rowIndex}, {colIndex}]</IonLabel>
              <IonInput
                type="number"
                value={cell}
                onIonChange={(event) => handleCellValueChange(event, rowIndex, colIndex)}
              ></IonInput>
            </IonItem>
          ))}
        </div>
      ))}

      <IonButton expand="full" onClick={handleSubmit}>
        Перевірити
      </IonButton>
    </form>
  );
};

export default MagicSquareForm;
