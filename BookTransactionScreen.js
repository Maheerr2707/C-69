import React from 'react'
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'
import {BarCodeScanner} from 'expo-barcode-scanner'
import * as Permisssions from 'expo-permissions'
export default class BookTransactionScreen extends React.Component{
  constructor(){
super()
    this.state={
        hasCameraPermissions:null,
        scanned:false,
        scannedData:'',
        
        buttonState: 'normal'
    }
  }  

getCameraPermissions=async()=>{
    const {status}=await Permissions.askAsync(Permissions.CAMERA)
    const scanned=this.state.scanned;
    const buttonState=this.state.buttonState
    if(buttonState=== 'clicked'&& hasCameraPermissions){
return(
 <BarCodeScanner onBarCodeScanned={scanned?undefined:this.handleBarCodeScanned}
    style={StyleSheet.absoluteFillObject}/>   
)
    }
  else if(buttonState=== 'normal'){
    return(
        <View style={{flex:1, justifyContent:'center,', alignitems:'center'}}>
          <Text style={Styles.displayText}>
              hasCameraPermissions===true?
              this.state.scannedData:'Request Camera Permission'
          </Text>
          <TouchableOpacity onPress={this.getCameraPermissions} style={Styles.scanButton}>
     <Text>
         Scan QR code
     </Text>
          </TouchableOpacity>
            </View>       
           )
           
  }  
    this.setState({
        hasCameraPermissions: status=== 'granted'
    })
}

    render(){
      const  hasCameraPermissions=this.state.hasCameraPermissions  
    }
}

const style=StyleSheet.create({
    container:{flex:1,
        justifyContent:'center',
        alignItems: 'center'   
        },
    displayText:{fontSize:15,
    textDecorationLine: 'underline'
    },
    
 scanButton:{
     backgroundColor: '#2196F3',
     padding:10,
     margin:10
 }      

})