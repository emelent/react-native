import React from 'react';
import {
  View, 
  Text, 
  ListView,
  StyleSheet
} from 'react-native';

import MyButton from './MyButton';


class Main extends React.Component{
  constructor(props){
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const data = [
      'Spectacles', 'Leopards', 'Ninjas', 'Apples', 'Grapes',
      'Treats', 'Atoms', 'Fins', 'Articles', 'Crystals'
    ];

    this.toggle = this.toggle.bind(this);
    this.state = {on: false, items: dataSource.cloneWithRows(data)};
  }

  renderRow(text, sId, rId){
    return (
      <Text style={styles.text}>
        {rId}. {text}
      </Text>
    );
  }

  toggle(){
    this.setState({on: !this.state.on});
  }

  render(){
    const {on, items} = this.state;
    const btnTitle = (on)? "Hide List":"Show List";
    const view = (on)? (
        <View>
          <View style={styles.container}>
            <Text style={styles.text}>List</Text>
          </View>
          <ListView dataSource={items}
            renderRow={this.renderRow}
            style={{padding: 10}}
          />
        </View>
      ): (
        <View style={styles.container}>
          <Text style={styles.text}>List hidden</Text>
        </View>
    );
    return (
      <View>
        <MyButton pressCallback={this.toggle}>
          {btnTitle}
        </MyButton>
        {view}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text:{
    fontSize: 20,
    fontFamily: 'HelveticaNeue-CondensedBold',
    color: '#173e43'
  },
  largeText:{
    fontSize: 52,
    fontFamily: 'HelveticaNeue-CondensedBold',
    color: '#173e43'
  }
});

export default Main;
