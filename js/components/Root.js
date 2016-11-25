import React from 'react';
import codePush from 'react-native-code-push';
import {Provider} from 'react-redux';

import Main from './Main';
import store from '../store';

class Root extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
};

Root = codePush(Root);
export default Root;
