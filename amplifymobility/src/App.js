import './App.css';
import MyDashboard from './components/MyDashboard';
import Mainpage from './components/Mainpage';
import Home from './components/Home';
// import MapContainer from './components/MapContainer'
function App() {
  return (
    <div className="App">
      <MyDashboard/>
      <Home/>
      <Mainpage/>
      {/* <MapContainer/> */}
    </div>
  );
}

export default App;
