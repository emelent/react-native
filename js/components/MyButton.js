import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';

class MyButton extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    return(
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={this.props.pressCallback}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>{this.props.children}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor:'#3fb0ac',
    height: 50
  },
  buttonText:{
    fontFamily: 'HelveticaNeue-CondensedBold',
    color: '#173e43'
  }
});

export default MyButton;
