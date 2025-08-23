import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider, useDispatch, useSelector } from "react-redux";
import MainRoutes from "./MainRoutes";
import RippleEffect from "./components/RippleEffect";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <RippleEffect />
          <Navbar />
          <MainRoutes />
        </Router>
      </PersistGate>
    </Provider>
  );
}
