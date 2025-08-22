import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider, useDispatch, useSelector } from "react-redux";
import MainRoutes from "./MainRoutes";
import RippleEffect from "./components/RippleEffect";
import { store } from "./redux/store";
import { useEffect } from "react";
import { fetchUserProfile} from "./redux/userSlice";

export default function App() {

  return (
    <Provider store={store}>
      <Router>
        <RippleEffect />
        <Navbar />
        <MainRoutes />
      </Router>
    </Provider>
  );
}
