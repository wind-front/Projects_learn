import React from 'react';
import Header from './common/header';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <BrowserRouter>
        <Route path="/" exact render={() => <div>Home</div>}></Route>
        <Route path="/detail" exact render={() => <div>detail</div>}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
