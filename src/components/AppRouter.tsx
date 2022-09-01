import React from 'react';
import { Route } from 'react-router-dom';
import {
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import MyPage from './MyPage';

const AppRouter: React.VFC = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route exact path="/">
        <MyPage />
      </Route>
    </IonRouterOutlet>
  </IonReactRouter>
);

export default AppRouter;
