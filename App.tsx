import { StyleSheet, Text, View } from 'react-native';
import { RiveAnimation } from './ios/RiveAnimation';
import { Alignment, Fit, type RNRiveError } from 'rive-react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <RiveAnimation 
        source={ require('./assets/main_menu.riv')} 
        autoplay={true}
        fit={Fit.FitWidth}
        alignment={Alignment.BottomCenter}
        style={styles.box}
        onError={(riveError: RNRiveError) => {
          console.log(riveError);
        }}
        />
      <RiveAnimation
        fit={Fit.Cover}
        alignment={Alignment.Center}
        style={styles.animation}
        autoplay={true}
        artboardName="AI LOOP"
        source={require("./assets/large-animation.riv")}
      />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  box: {
    width: '100%',
    height: 500,
    marginVertical: 20,
  },
  animation: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});