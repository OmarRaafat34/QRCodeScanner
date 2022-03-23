import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

const App = ()  => {
  const [dataScanned, setDataScanned] = useState('')
  const [dataType, setDataType] = useState('')

  const onSuccess = e => {
    setDataScanned(e.data)
    setDataType(e.type)
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      fadeIn
      reactivate
      showMarker
      vibrate={false}
      topContent={
        <Text style={styles.centerText}>
          Go to{' '}
          <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
          your computer and scan the QR code.
        </Text>
      }
      bottomContent={
        <View>
          <Text>{dataScanned}</Text>
          <Text>{dataType}</Text>
        </View>
      }
      
    />

  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
});

export default App;
