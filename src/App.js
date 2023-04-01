import "./App.css";
import Routing from "./Routes/Routing";
import {Provider} from 'react-redux';
import {Store} from './Redux/Store';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={Store}>
      {console.log("store : ",Store.getState())}
      <ToastContainer/>
      <Routing />
    </Provider>
  );
}

export default App;
