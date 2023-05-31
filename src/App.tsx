import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

import MagicSquareForm from './components/MagicSquareForm';
import MagicSquareService from './services/MagicSquareService';
import Header from './components/Header';

const App: React.FC = () => {
  const [isMagicSquare, setIsMagicSquare] = useState(false);

  const handleCheck = (matrix: number[][]) => {
    const result = MagicSquareService.isMagicSquare(matrix);
    setIsMagicSquare(result);
  };

  return (
    <IonApp>
      <Header />
      <IonContent>
        <MagicSquareForm onCheck={handleCheck} />
        {isMagicSquare && <div>Введена матриця є магічним квадратом.</div>}
        {!isMagicSquare && isMagicSquare !== null && <div>Введена матриця не є магічним квадратом.</div>}
      </IonContent>
    </IonApp>
  );
};

export default App;