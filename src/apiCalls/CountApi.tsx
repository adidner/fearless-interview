import axios from "axios";

const COUNT_API_KEY = "1ccb732e-b55a-4404-ad3f-0f99c02fe44e";
const NAME_SPACE = "namespace/";
const COUNT_API_BASE_URL = "https://api.countapi.xyz/";

//get request to increment our count and get the newly incremented value via the CountApi
export function incrementCountReturnValue(successCallback: (newValue: number) => void, errorCallback: (errorMessage: string) => void){
    axios
    .get(COUNT_API_BASE_URL + 'hit/' + NAME_SPACE + COUNT_API_KEY)
    .then((response) => {
        successCallback(response?.data?.value);
    })
    .catch(error => {
        errorCallback(error.toString());
    });
}

export function countReturnValue(successCallback: (newValue: number) => void, errorCallback: (errorMessage: string) => void){
    axios
    .get(COUNT_API_BASE_URL + 'get/' + NAME_SPACE + COUNT_API_KEY)
    .then((response) => {
        successCallback(response?.data?.value);
    })
    .catch(error => {
        errorCallback(error.toString());
    });
}