import React, { Component } from 'react';
import { View } from 'react-native';

import { ListItem, Icon } from 'react-native-elements'

class List extends Component {
 constructor(props){
     super(props);
    this.state ={
        barcodeList : [
            {
                barcode: 'ABC-abc-1234',
                icon: 'label-outline'
            },
            {
                barcode: 'ABC-abc-1234',
                icon: 'label-outline'
            }    
          ]
        }    
     }
     
    _onPressButton(e) {                
        const newValue =    {
            barcode: 'ABC-abc-1234',
            icon: 'label-outline'
        } ;
        
        var barcode = this.state.barcodeList.concat(newValue);
        this.setState({ barcodeList: barcode })
    }
  render() {
    return (
      <View >
{
    this.state.barcodeList.map((item, i) => (
      <ListItem
      onPress ={(e)=>{this._onPressButton(e)}}
      key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.barcode}</ListItem.Title>
        </ListItem.Content>      
        <ListItem.Chevron />  
      </ListItem>
    ))
  }
      </View>
    );
  }
}

export default List;