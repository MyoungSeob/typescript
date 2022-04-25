import React from 'react';
import {Provider} from 'react-redux';
import store from './src/slices/store';
import Main from './src/screens/Main';
function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
