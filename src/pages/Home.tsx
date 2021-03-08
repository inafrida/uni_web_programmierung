import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import MapContainer from '../components/MapContainer';
import './Home.css';
import React from 'react';
import { egalwie } from '../hooks/tom';

import { IonButton, IonIcon} from '@ionic/react';
import { star } from 'ionicons/icons';

const Home: React.FC = () => {
const {getPermission} = egalwie();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>

          <IonTitle>Blank</IonTitle>
          <IonButton onClick={() => getPermission()}>
      <IonIcon slot="icon-only" icon={star} />
    </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <MapContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
