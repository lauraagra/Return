import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './src/theme';
import { Widget } from '.src/components'

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>


      <StatusBar style="auto" />
    </View>
  );
}

});
