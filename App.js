import React, { useEffect } from 'react';
import { View } from "react-native";
import Routes from './src/Navigation/Routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { getItem } from './src/utils/utils';
import { saveUserData } from './src/redux/reducers/auth';


export default function App() {
  useEffect(() => {
    (async () => {
      // get session of user and make set
      let userData = await getItem('userData')
      if (!!userData) {
        store.dispatch(saveUserData(userData))
      }
    })();
  }, [])

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Routes />
      </View>
    </Provider>
  )
}


