import React from 'react';
import codePush from 'react-native-code-push'
import Main from './Main';

@codePush
class Root extends React.Component{
  render(){
    return(
      <Main />
    );
  }
};

export default Root;
