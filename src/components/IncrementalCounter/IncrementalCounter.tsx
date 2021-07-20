import { incrementCountReturnValue } from '../../apiCalls/CountApi';
import { useEffect, useState } from 'react';

export function IncrementalCounter() {
  
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
    <>
        <div> {countError === "" ? countValue : countError} </div>
        <button onClick={handleIncrement}>Increment Count</button>        
    </>
  );
}

export default IncrementalCounter;
