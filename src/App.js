import logo from './logo.svg';
import './App.css';
import { Biography } from './components/Biography.jsx'
//import Biography from './components/Biography.jsx'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Científicos famosos</h1>
        <Biography />
      </div>
    </div>
  );
}

export default App;
