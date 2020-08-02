import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Alert from "./components/Alert";
import SetProfile from "./pages/SetProfile";
import PrivateRoute from "./redux/routing/PrivateRoute";
//redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { loadUser } from "./redux/actions/auth_actions";
import setAuthToken from "./redux/utils/setAuthToken";

import "./App.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Alert />
        <Route exact path='/' component={Register} />
        <section className='container'>
          <Switch>
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/photo' component={SetProfile} />
          </Switch>
        </section>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
