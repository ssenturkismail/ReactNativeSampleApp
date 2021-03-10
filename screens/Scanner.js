import React, { Component } from 'react';
import { ScrollView} from 'react-native';

import QRScanner  from "../components/QRScanner";

class ScannerScreen extends Component {
  render() {
    return (
      <ScrollView>
          <QRScanner></QRScanner>
      </ScrollView>
    );
  }
}
export default ScannerScreen;