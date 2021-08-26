import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Audio} from 'expo-av';
class PhonicSoundButton extends React.Component{
  playSound= async(soundChunk)=>{
    var soundLink='https://s3-whitehatjrcontent.whjr.online/phones/'+soundChunk+'.mp3';
    await Audio.Sound.createAsync(
        {uri: soundLink},
        {shouldPlay:true}
    )
}
    render()
    {
        
        return(
            <TouchableOpacity style={styles.chunkButton}onClick={()=>{this.playSound(this.props.soundChunk)}}>
            <Text style={styles.displayText}>{this.props.wordChunk}</Text>
            </TouchableOpacity>
        ); 
    }
}
const styles = StyleSheet.create({
    displayText: {
      textAlign: 'center',
      fontSize: 30,
      color: 'white'
    },
    chunkButton:{
      width: '60%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      margin: 5,
      backgroundColor: 'red'
    }
  });

export default PhonicSoundButton;