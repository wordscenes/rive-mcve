import type React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import Rive,  { Alignment, Fit, type RNRiveError } from 'rive-react-native';
// @ts-ignore
import resolveAssetSource from "react-native/Libraries/Image/resolveAssetSource";


// detects if it is an http or file url
const stringIsUrl = (uri: string) => {
  return uri.startsWith("http") || uri.startsWith("file");
};

export const RiveTest = () => {

  // this allows the rive asset to be loaded locally using require() in expo during development AND in production
  const source = require('./assets/main_menu.riv');
  const resolved = resolveAssetSource(source);
  const uriIsUrl = stringIsUrl(resolved.uri);

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
        <Rive
          autoplay={true}
          fit={Fit.FitWidth}
          alignment={Alignment.BottomCenter}
          style={styles.box}
          // stateMachineName="State Machine 1"
          // artboardName="Artboard"
          onError={(riveError: RNRiveError) => {
            console.log(riveError);
          }}
          resourceName={!uriIsUrl ? resolved.uri : undefined}
          url={uriIsUrl ? resolved.uri : undefined}
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    width: '100%',
  },
  box: {
    width: '100%',
    height: 500,
    marginVertical: 20,
  },
});