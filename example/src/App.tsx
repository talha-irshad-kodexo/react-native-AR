import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { SceneformView } from '../../src';

const App = () => {
  const sceneformView = useRef(null);

  return (
    <View style={styles.container}>
      <SceneformView
        ref={sceneformView}
        style={styles.container}
        // locationMarkers={[
        //   {
        //     title: 'Hello',
        //     lat: 67,
        //     lng: 24,
        //     isAnchor: false,
        //   },
        //   {
        //     title: 'Hi',
        //     lat: 70,
        //     lng: 20,
        //     isAnchor: false,
        //   },
        // ]}
        onTapPlane={(event) => {
          sceneformView.current.addObject({
            name: 'models/Rabbit.glb',
            anchorId: event.planeId,
            isCloudAnchor: false,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
