import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import store from "./redux/store";
import { loadUser } from "./redux/actions/auth_actions";
import setAuthToken from "./redux/utils/setAuthToken";
import Alert from "./components/Alert";

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
        <section className='container'>
          <Register />
        </section>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
