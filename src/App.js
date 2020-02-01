import React from 'react';

/* Redux */
import { Provider } from "react-redux"
import store from "./store"


function App() {
  return (
    <Provider store={store}>
      <p>crud</p>
    </Provider>
  );
}

export default App;