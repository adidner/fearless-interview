import './App.css';
import { incrementCountReturnValue } from './apiCalls/CountApi';
import { useEffect, useState } from 'react';

function App() {
  
  const [countValue, setCountValue] = useState<number | undefined>(undefined);
  const [countError, setCountError] = useState<string>("");

  const onSuccess = (newValue: number) => {
    setCountValue(newValue);
  }

  const onError = (errorMessage: string) => {
    setCountError(errorMessage);
  }


  useEffect(() => {
    incrementCountReturnValue(onSuccess, onError);
  },[]);


  const handleIncrement = () => {
    incrementCountReturnValue(setCountValue,setCountError);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div> {countError === "" ? countValue : countError} </div>
        <button onClick={handleIncrement}>Increment Count</button>        
      </header>
    </div>
  );
}

export default App;
