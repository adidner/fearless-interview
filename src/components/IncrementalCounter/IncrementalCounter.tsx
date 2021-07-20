import { incrementCountReturnValue, countReturnValue } from '../../apiCalls/CountApi';
import { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import './IncrementalCounter.css'

export function IncrementalCounter() {
  
  const [countValue, setCountValue] = useState<number | undefined>(undefined);
  const [countError, setCountError] = useState<string>("");
  const [loadingCount, setLoadingCount] = useState<boolean>(false);
  

  const onSuccess = (newValue: number) => {
    setCountValue(newValue);
    setLoadingCount(false);
  }

  const onError = (errorMessage: string) => {
    setCountError(errorMessage);
    setLoadingCount(false);
  }


  useEffect(() => {
    countReturnValue(onSuccess, onError);
  },[]);


  const handleIncrement = () => {
    setLoadingCount(true);
    incrementCountReturnValue(onSuccess,onError);
  }

  const showLoadingErrorOrCount = () => {
    let message: string = "";
    if(loadingCount){
      message = "Loading...";
    }
    else if(countError !== ""){
      message = countError;
    }
    else{
      message = countValue === undefined ? "" : countValue.toString();
    }
    return <div>{message}</div>
  }


  return (
    <>
        <div className={"incrementalcounter-message-loader-container"}>
          {showLoadingErrorOrCount()}
          {loadingCount ? <CircularProgress color={"inherit"} size={25}/> : null}
        </div>
        <Button onClick={handleIncrement} variant={'contained'}>Increment Count</Button>        
    </>
  );
}


export default IncrementalCounter;
