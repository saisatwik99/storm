import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MapChart from './MapChart';

function App() {
  return (
    <div className="App">
      <img
        src="https://www.stormedugo.com/Content/User/images/logo.png" 
        alt="Logo"
        className="top-right-image"
      />
      <MapChart/>
    </div>
  );
}

export default App;
