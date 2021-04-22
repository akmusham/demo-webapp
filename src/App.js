import './App.css';
import Routes from "./Routes/"
import { Provider } from 'react-redux';
import store from "./Redux/"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
