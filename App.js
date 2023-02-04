import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Polygon } from 'react-native-maps';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function App() {
  const wogsList = [
    {
      title: 'WOG, АЗС',
      adress: 'Доценьке шосу вул. 7А',
      latitude: 47.87249660890035,
      longitude: 35.28501134900227,
    },
    {
      title: 'WOG, АЗС',
      adress: 'Дослідна станція, буд.2',
      latitude: 47.763602654168906,
      longitude: 35.2073088338694,
    },
    {
      title: 'WOG, АЗС',
      adress: 'Ювілейний проспект, 36',
      latitude: 47.81588438384813,
      longitude: 35.02940939523466,
    },
    {
      title: 'WOG, АЗС',
      adress: 'Сонячне шосе, 55',
      latitude: 47.89126457176856,
      longitude: 34.98055593386939,
    },
    {
      title: 'WOG, АЗС',
      adress: 'Вулиця перемоги, 90',
      latitude: 47.8382669117921,
      longitude: 35.150625995234655,
    },
    {
      title: 'WOG, АЗС',
      adress: 'вулиця Зачиняєва, 21а',
      latitude: 47.868698926084285,
      longitude: 35.01042501142697,
    },
    {
      title: 'WOG, АЗС',
      adress: 'Вулиця зразкова, 2Б',
      latitude: 47.87945453084837,
      longitude: 35.14611109523466,
    },
    {
      title: 'WOG, АЗС',
      adress: 'Стартова вул. 5',
      latitude: 47.848572100546136,
      longitude: 35.24514577989334,
    },
    {
      title: 'WOG, АЗС',
      adress: 'Магістральна вул., 100',
      latitude: 47.83909598300222,
      longitude: 35.24003885427646,
    },
    {
      title: 'WOG, АЗС',
      adress: 'Чарівна вулиця, 64-а',
      latitude: 47.84263892865062,
      longitude: 35.2286662888271,
    },
    {
      title: 'WOG, АЗС',
      adress: 'вул. Донецьке шосе, буд.7',
      latitude: 47.850164998233765,
      longitude: 35.24417626812604,
    },
    {
      title: 'WOG, АЗС',
      adress: 'вул. Парковка, 1п',
      latitude: 47.888422713765266,
      longitude: 35.021598944832625,
    },
    {
      title: 'WOG, АЗС',
      adress: 'вул., Сонячне шосе, буд.55',
      latitude: 47.89463839350997,
      longitude: 35.009110580508995,
    },
    {
      title: 'WOG, АЗС',
      adress: 'вул. Українська, буд. 2д',
      latitude: 47.72907396526296,
      longitude: 35.272053829491306,
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: 47.8507859,
          longitude: 35.1582867,
          latitudeDelta: 0.4,
          longitudeDelta: 0.2,
        }}>
        {wogsList.map((item, index) =>
          <Marker
            key={index}
            title={item.title}
            description={item.adress}
            coordinate={{ latitude: item.latitude, longitude: item.longitude, }}
          />
        )}
      </MapView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  }
});