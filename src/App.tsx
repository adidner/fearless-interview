import './App.css';
import { IncrementalCounter } from './components/IncrementalCounter/IncrementalCounter';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">  
        <img src={"https://fearless.tech/brand/logo_mark.png"} alt={"fearless logo"}/>  
        <IncrementalCounter/>    
      </header>
    </div>
  );
}

export default App;
